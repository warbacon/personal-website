<script lang="ts">
    export let owner: string = "warbacon";
    export let repo: string;
    export let imageUrl: string;

    let request: Request;

    if (import.meta.env.DEV) {
        request = new Request(`https://api.github.com/repos/${owner}/${repo}`, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${import.meta.env.PUBLIC_GITHUB_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });
    } else {
        request = new Request(`https://api.github.com/repos/${owner}/${repo}`, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });
    }

    const promise = (async () => {
        const response = await fetch(request);
        return response.json();
    })();
</script>

<div
    class="max-w-sm rounded-lg border border-ctp-overlay0 bg-ctp-mantle shadow transition-colors hover:bg-ctp-crust dark:bg-ctp-surface0 dark:shadow-none dark:hover:bg-ctp-surface1"
>
    <a href="https://github.com/{owner}/{repo}">
        <img
            class="aspect-[2/1] w-full rounded-t-lg object-cover"
            src={imageUrl}
            alt="Repo cover"
        />
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold capitalize tracking-tight">
                {repo}
            </h5>
            {#await promise}
                <div role="status" class="mt-4 max-w-sm animate-pulse">
                    <div class="mb-2.5 h-2.5 max-w-[80ch] bg-ctp-overlay0"></div>
                    <div class="mb-2.5 h-2.5 max-w-[80ch] bg-ctp-overlay0"></div>
                    <div class="mb-10 h-2.5 max-w-[10ch] bg-ctp-overlay0"></div>
                    <div class="h-2.5 max-w-[8ch] bg-ctp-overlay0"></div>
                </div>
            {:then data}
                <p class="mb-3 text-ctp-subtext0">
                    {data.description}
                </p>
                <p class="font-bold text-ctp-yellow">
                    {data.stargazers_count}
                    {data.stargazers_count == 1 ? "star" : "stars"}
                </p>
            {:catch}
                <p class="text-ctp-red">An error has ocurred.</p>
            {/await}
        </div>
    </a>
</div>
