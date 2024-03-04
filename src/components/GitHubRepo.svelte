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
    class="max-w-sm bg-ctp-mantle dark:bg-ctp-surface0 hover:bg-ctp-crust dark:hover:bg-ctp-surface1 transition-colors border border-ctp-overlay0 rounded-lg shadow dark:shadow-none"
>
    <a href="https://github.com/{owner}/{repo}">
        <img
            class="rounded-t-lg aspect-[2/1] object-cover w-full"
            src={imageUrl}
            alt="Repo cover"
        />
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight capitalize">
                {repo}
            </h5>
            {#await promise}
                <div role="status" class="max-w-sm animate-pulse mt-4">
                    <div
                        class="h-2.5 bg-ctp-overlay0 max-w-[80ch] mb-2.5"
                    ></div>
                    <div
                        class="h-2.5 bg-ctp-overlay0 max-w-[80ch] mb-2.5"
                    ></div>
                    <div class="h-2.5 bg-ctp-overlay0 max-w-[10ch] mb-10"></div>
                    <div class="h-2.5 bg-ctp-overlay0 max-w-[8ch]"></div>
                </div>
            {:then data}
                <p class="mb-3 text-ctp-subtext0">
                    {data.description}
                </p>
                <p class="text-ctp-yellow font-bold">
                    {data.stargazers_count}
                    {data.stargazers_count == 1 ? "star" : "stars"}
                </p>
            {:catch}
                <p class="text-ctp-red">An error has ocurred.</p>
            {/await}
        </div>
    </a>
</div>
