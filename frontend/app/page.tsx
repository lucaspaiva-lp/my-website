import DashboardContent from "@/components/DashboardContent";

// 🛠️ Server-side function to fetch GitHub data via GraphQL
async function getGithubContributions() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  console.log("==========================================");
  console.log("DOCKER RUNTIME VERIFICATION:");
  console.log("Token found?:", token ? "YES (Starts with " + token.substring(0, 7) + "...)" : "NO (undefined)");
  console.log("==========================================");

  if (!token) {
    console.warn("GITHUB_TOKEN not found. Rendering static fallback graph.");
    return null; 
  }

  const query = `
    query {
      user(login: "lucaspaiva-lp") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error("Failed to fetch GitHub data");
    
    const json = await res.json();
    console.log("==========================================");
    console.log("GITHUB API RESPONSE:");
    console.log("Returned errors?:", json.errors ? JSON.stringify(json.errors) : "No");
    console.log("Calendar data found?:", json.data?.user?.contributionsCollection?.contributionCalendar ? "YES" : "NO");
    console.log("Total contributions returned:", json.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions);
    console.log("==========================================");
    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error in GitHub request:", error);
    return null;
  }
}

export default async function Home() {
  const githubData = await getGithubContributions();

  return <DashboardContent githubData={githubData} />;
}