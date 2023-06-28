<template>
  <div
    class="pt-20 sm:pt-24 lg:pt-32 flex items-center justify-center relative overflow-hidden"
  >
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <div class="text-center">
        <img
          src="/images/ogp/sony.png"
          alt=""
          class="object-cover w-full lg:h-[520px]"
        />
      </div>
    </div>
  </div>

  <div class="space-y-28 lg:space-y-40 pb-40">
    <article class="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20">
      <header class="text-center mb-10 sm:mb-16">
        <time class="text-gray-400">Jun 27, 2023</time>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black"
        >
          Startale and Sony Network Communications Form Capital Alliance to
          Build Global Web3 Infrastructure
        </h1>
      </header>
      <div class="entry-content leading-9">
        <p>
          Startale Labs Pte. Ltd. has successfully secured $3.5 million
          (approximately 500 million JPY) in seed funding from Sony Network
          Communications Inc. through a private placement of new shares. As part
          of their partnership, both companies are appointing Jun Watanabe,
          President and Representative Director of Sony Network Communications
          Inc., as a director of Startale Labs.
        </p>
        <p>
          Startale Labs is a tech company dedicated to Web3 infrastructure
          development, driven by the mission to build “Web3 for Billions.”
          Leveraging its expertise and connections gained as a core contributor
          to Astar Network, Startale Labs is creating tools and infrastructure
          to facilitate enterprise use of Web3 and broader adoption.
        </p>
        <p>
          In partnership, Startale Labs and Sony Network Communications will
          work on establishing the infrastructure necessary to support the
          global adoption of Web3, aided by Sony Network Communications’
          extensive knowledge and experience building successful solution
          services in telecommunications and other sectors.
        </p>
        <p>
          Sota Watanabe, CEO of Startale Labs, commented, “<em
            >We are honored to enter into this partnership with Sony Network
            Communications, a company of the Sony Group that is renowned for its
            achievements across industries including Games &amp; Network
            Services, Music, Pictures, Entertainment Technologies &amp;
            Services, Imaging &amp; Sensing Solutions and Financial Services.
            Sony Group has tremendous potential in the Web3 space, and we can’t
            wait to collaborate on tapping into that. We look forward to
            collaborating with Sony Network Communications to develop global
            Web3 infrastructure and creating groundbreaking Web3 use cases.”</em
          >
        </p>
        <p>
          Jun Watanabe, President and Representative Director of Sony Network
          Communications Inc., added,
          <em
            >“I am excited to further strengthen our collaboration with Startale
            Labs, a company with advanced Web3 technologies and expertise. We
            have already been cooperating with Startale Labs by jointly hosting
            incubation programs, aiming to promote the development of Web3. With
            this capital partnership, we are merging Startale Labs’ knowledge
            and technical capabilities in Web3 with the experience and business
            fields cultivated by Sony Network Communications to create the
            infrastructure necessary to facilitate global Web3 adoption. We
            believe this partnership will contribute to the creation of new
            killer Web3 use cases and deliver unprecedented levels of
            value.”</em
          >
        </p>
        <p>
          <strong>About Startale Labs</strong><br />
          Startale Labs is a leading technology company headquartered in
          Singapore. With a focus on Web3 infrastructure, the company aims to
          build innovative products to enable the widespread adoption of Web3
          technologies.
        </p>
        <p>
          Company Name: Startale Labs Pte Ltd<br />
          Address: 105 Cecil Street #24–02 The Octagon, Singapore<br />
          Representative: CEO Sota Watanabe<br />
          Corporate Website:
          <a href="https://startale.org/en/">https://startale.org/</a><br />
          Twitter Account:
          <a href="https://twitter.com/StartaleHQ"
            >https://twitter.com/StartaleHQ</a
          ><a href="https://twitter.com/StartaleHQ%EF%BF%BCContact"> </a><br />
          Contact: <a href="mailto:info@startale.org">info@startale.org</a>
        </p>
        <p>
          <strong>About Sony Network Communications Inc.</strong><br />
          Sony Network Communications Inc, a Sony Group company, was established
          in 1995 as an Internet service provider. In addition to its
          telecommunications business, including the high-speed fiber-optic
          broadband service “NURO Hikari”, the Company is engaged in businesses
          such as IoT, AI, and solution services. Based on its corporate vision
          “INFRASTRUCTURE of CHANGE — For all humanity,” Sony Network
          Communications also promotes diverse incubation and new businesses,
          including the Web3 area.<br />
          <a href="https://www.sonynetwork.co.jp/"
            >https://www.sonynetwork.co.jp/</a
          >
        </p>
        <p>
          <strong>Contacts</strong><br />
          Startale Media Contact:
          <a href="mailto:information@startale.org">information@startale.org</a>
        </p>
      </div>
      <!-- <footer class="mt-16">
        <div class="flex mb-12 text-base lg:text-lg">
          <p class="mr-2 mt-1.5">{{ $t("blog.tags") }}:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              v-for="tag in post.tagsOriginal.split(',')"
              :href="i18n + '/blog/tag/' + tag"
              class="block border border-gray-300 py-1 px-4 hover:bg-gray-50 hover:text-gray-900 mr-1 mb-2 hover:no-underline rounded-sm"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex border border-gray-300 p-4 lg:p-8 rounded">
          <div class="shrink-0 mr-4">
            <img
              :src="post.authorImg"
              alt=""
              class="object-cover w-12 lg:w-16 h-12 lg:h-16 rounded-full"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg lg:text-xl mb-1 text-black">
              {{ post.author.profileSpace.name }}
            </h3>
            <p class="text-base lg:text-lg">
              {{ post.author.profileSpace.about }}
            </p>
          </div>
        </div>
      </footer> -->
    </article>

    <!-- <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-center text-4xl lg:text-5xl font-semibold mb-2 lg:mb-12">
        {{ $t("blog.related") }}
      </h2>
      <ul>
        <BlogArticleCard v-for="post in posts" :post="post" />
      </ul>
    </div> -->
  </div>
</template>

<script setup lang="ts">
defineI18nRoute(false);
const route = useRoute();
const { locale, t } = useI18n();

import { meta } from "@/content/meta";
const seoTitle = `Startale and Sony Network Communications Form Capital Alliance to Build Global Web3 Infrastructure | ${meta.siteName}`;
const seoDescription =
  "Startale Labs Pte. Ltd. has successfully secured $3.5 million (approximately 500 million JPY) in seed funding from Sony Network Communications Inc. through a private placement of new shares. As part of their partnership, both companies are appointing Jun Watanabe, President and Representative Director of Sony Network Communications Inc., as a director of Startale Labs.";
const seoUrl = `${meta.url}${route.fullPath}`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  author: () => "Startale Labs",
  ogSiteName: () => meta.siteName,
  ogLocale: () => locale.value,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => "https://startale.org/images/ogp/sony.png",
  ogImageUrl: () => "https://startale.org/images/ogp/sony.png",
  ogType: () => "article",
  ogUrl: () => seoUrl,
  twitterSite: () => `@${meta.twitter}`,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => "https://startale.org/images/ogp/sony.png",
});

// useSchemaOrg([
//   defineArticle({
//     author: {
//       name: post.author.profileSpace.name,
//     },
//   }),
// ]);
</script>

<style lang="postcss">
.entry-content {
  @apply mx-auto prose lg:prose-xl prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-headings:text-black prose-headings:font-serif prose-headings:font-semibold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-gray-50 prose-strong:font-bold prose-img:mx-auto;
}
.entry-content p code {
  font-size: 0.9em;
  @apply bg-gray-50 font-normal rounded p-2;
}
.entry-content p code::before,
.entry-content p code::after {
  @apply hidden;
}
.entry-content h1 strong,
.entry-content h2 strong,
.entry-content h3 strong {
  @apply font-semibold;
}
</style>
