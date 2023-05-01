<template>
  <li class="border-b border-gray-300 py-8">
    <NuxtLink
      href="#"
      class="flex items-center overflow-hidden bg-space-gray group hover:bg-gray-50 transition hover:no-underline"
      target="_blank"
    >
      <img
        src="/images/blog/placeholder.webp"
        alt=""
        class="object-cover w-[300px] h-[160px] group-hover:brightness-110 shrink-0"
      />
      <div class="ml-10 flex-1">
        <time class="text-gray-400 text-tiny">Mar 27, 2023</time>
        <p class="text-xl line-clamp-3 leading-7 mt-1 group-hover:text-black">
          Article title: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>
    </NuxtLink>
  </li>
</template>
