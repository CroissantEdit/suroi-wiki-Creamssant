import PageCard from "@/components/cards/PageCard";
import CommitLink from "@/components/links/CommitLink";
import fs from "fs/promises";
import Image from "next/image";
import Link from "@/components/links/Link";
import TagLink from "@/components/links/TagLink";
import GridTable from "@/components/tables/GridTable";
import { wikiPages } from "@/lib/util/search";

export default async function Home() {
  const HEAD = await fs.readFile(".git/modules/vendor/suroi/HEAD", "utf8");

  return (
    <main>
      <div className="prose prose-invert">
        <h1>Official Suroi Wiki</h1>
        <div className="flex justify-center">
          <Image
            src="/img/suroi.svg"
            alt="Suroi Battle Royale"
            width={2000 / 3}
            height={450 / 3}
            priority
          />
        </div>

        {/* What is Suroi? */}
        <div className="border border-transparent hover:border-blue-500 rounded-lg p-3">
          <p className="text-lg"><strong>What is Suroi?</strong></p>
          <p className="text-sm">
            Welcome to the official Suroi wiki! Suroi is an open-source 2D
            battle royale game inspired by surviv.io. You can play it at{" "}
            <Link href="https://suroi.io" target="_blank">
              suroi.io
            </Link>
            .
          </p>
        </div>

        {/* How can I contribute? */}
        <div className="border border-transparent hover:border-blue-500 rounded-lg p-3">
          <p className="text-lg"><strong>How can I contribute?</strong></p>
          <p className="text-sm">
            This wiki is also open-source! Any contributions are appreciated.
            To contribute, head over to{" "}
            <Link
              href="https://github.com/HasangerGames/suroi-wiki"
              target="_blank"
            >
              the GitHub repo
            </Link>
            .
          </p>
        </div>

        {/* What are the stats based on? */}
        <div className="border border-transparent hover:border-blue-500 rounded-lg p-3">
          <p className="text-lg"><strong>What are the stats based on?</strong></p>
          <p className="text-sm"> 
            Stats are based off Suroi commit <CommitLink sha={HEAD} /> @{" "}
            <TagLink sha={HEAD} />
          </p>
        </div>

        <h2>Pages</h2>
      </div>
      <GridTable>
        {wikiPages.map((page) => (
          <PageCard
            key={page.url}
            title={page.name}
            url={page.url}
            image={page.image ?? ""}
            description={page.description}
          />
        ))}
      </GridTable>
    </main>
  );
}
