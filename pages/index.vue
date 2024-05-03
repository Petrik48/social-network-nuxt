<script lang="ts" setup>
import Logo from "assets/svg/logo.svg";
import GooglePlay from "assets/svg/google-play.svg";
import RuStore from "assets/svg/ru-store.svg";
import AppStore from "assets/svg/app-store.svg";
import Tooltip from "assets/svg/tooltip.svg";

definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "ВКонтакте | Добро пожаловать",
});
</script>

<template>
  <div>
    <div class="flex gap-4">
      <div class="flex items-center flex-1 flex-col pt-[14px]">
        <h1 class="font-bold mb-2 text-[22px]">
          ВКонтакте для мобильных устройств
        </h1>
        <p class="text-center text-[14px] text-text-subhead">
          Установите официальное мобильное приложение ВКонтакте и оставайтесь
          в&nbsp;курсе&nbsp;новостей&nbsp;ваших&nbsp;друзей,&nbsp;где бы вы ни
          находились.
        </p>
        <div class="flex mt-8">
          <a
            class="inline-block w-[183px] focus:outline-0"
            href="https://play.google.com/store/apps/details?id=com.vkontakte.android"
            target="_blank"
          >
            <NuxtImg src="/auth/android.png" />
          </a>
          <a
            class="inline-block w-[198px] -ml-[31px] focus:outline-0"
            href="https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498"
            target="_blank"
          >
            <NuxtImg class="w-full" src="/auth/iphone.png" />
          </a>
        </div>
        <div class="flex gap-[10px] mt-2">
          <a
            class="flex items-center px-4 gap-1.5 rounded-lg text-xs text-primary-foreground h-[32px] hover:bg-[#ebf2fafc] focus:bg-[#ebf2fafc] focus:outline-0"
            href="https://play.google.com/store/apps/details?id=com.vkontakte.android"
            target="_blank"
          >
            <GooglePlay />
            <span>Google Play</span>
          </a>
          <a
            class="flex items-center px-4 gap-1.5 rounded-lg text-xs text-primary-foreground h-[32px] hover:bg-[#ebf2fafc] focus:bg-[#ebf2fafc] focus:outline-0"
            href="https://apps.rustore.ru/app/com.vkontakte.android"
            target="_blank"
          >
            <RuStore />
            <span>RuStore</span>
          </a>
          <a
            class="flex items-center px-4 gap-1.5 rounded-lg text-xs text-primary-foreground h-[32px] hover:bg-[#ebf2fafc] focus:bg-[#ebf2fafc] focus:outline-0"
            href="https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498"
            target="_blank"
          >
            <AppStore />
            <span>App Store</span>
          </a>
        </div>
        <a
          class="group mt-6 text-primary-link text-xs hover:underline"
          href="https://vk.com/products"
          target="_blank"
        >
          Все продукты
          <Icon
            class="group-hover:translate-x-0.5"
            name="icon-park-outline:right"
            size="12"
          />
        </a>
      </div>
      <div class="flex flex-col w-[320px]">
        <div
          class="flex flex-col items-center rounded-xl bg-background-header py-8 px-6"
        >
          <Logo class="text-primary" />
          <h2 class="mt-4 mb-5 font-medium text-m">Вход ВКонтакте</h2>
          <UiInput placeholder="Телефон или почта" />
          <div class="self-start flex items-center justify-center mt-3">
            <UiCheckbox id="saveUser" />
            <label class="text-text-secondary text-xs ml-1.5" for="saveUser">
              Сохранить вход
            </label>
            <UiTooltipProvider>
              <UiTooltip>
                <UiTooltipTrigger as-child>
                  <button
                    class="ml-1 cursor-default text-[#aeb7c2] hover:text-[#99a2ad] focus:text-[#99a2ad] focus:outline-0"
                  >
                    <Tooltip />
                  </button>
                </UiTooltipTrigger>
                <UiTooltipContent class="w-[260px]">
                  <p class="font-medium mb-1.5">Сохранить вход</p>
                  <p>
                    Выберите, чтобы сохранить данные аккаунта для быстрого входа
                    на этом устройстве
                  </p>
                </UiTooltipContent>
              </UiTooltip>
            </UiTooltipProvider>
          </div>
          <UiButton class="mt-5 w-full"> Войти</UiButton>
        </div>
        <div
          class="flex flex-col items-center mt-4 rounded-xl bg-background-header py-8 px-6"
        >
          <NuxtLink to="/register" class="w-full">
            <UiButton class="w-full bg-positive">Создать аккаунт</UiButton>
          </NuxtLink>
          <p class="text-xs text-center mt-3 text-[#99a2ad]">
            После регистрации вы получите доступ ко&nbsp;всем возможностям
            VK&nbsp;ID
          </p>
          <a
            class="text-xs text-text-subhead hover:underline focus:underline focus:outline-0"
            href="https://id.vk.com/about/id"
          >
            Узнать больше
          </a>
        </div>
        <a
          class="mt-3.5 text-center text-xs text-text-secondary hover:underline focus:underline focus:outline-0"
          href="https://vk.com/legal/recommendations"
        >
          Применяются рекомендательные технологии
        </a>
      </div>
    </div>

    <div class="flex justify-between text-xs mt-8 text-primary-link">
      <div class="text-[#939393]">
        <a
          class="text-primary-link hover:underline focus:underline"
          href="https://github.com/Petrik48?tab=repositories"
          target="_blank"
        >
          Petrik48
        </a>
        © 2024
      </div>
      <ul class="flex">
        <li class="py-0.5 px-[5px]">
          <a
            class="hover:underline focus:underline"
            href="https://vk.com/about"
            target="_blank"
          >
            О Вконтакте
          </a>
        </li>
        <li class="py-0.5 px-[5px]">
          <a
            class="hover:underline focus:underline"
            href="https://vk.com/terms"
            target="_blank"
          >
            Правила
          </a>
        </li>
        <li class="py-0.5 px-[5px]">
          <a
            class="hover:underline focus:underline"
            href="https://ads.vk.com/business"
            target="_blank"
          >
            Для бизнеса
          </a>
        </li>
        <li class="py-0.5 px-[5px]">
          <a
            class="hover:underline focus:underline"
            href="https://dev.vk.com/ru"
            target="_blank"
          >
            Разработчикам
          </a>
        </li>
      </ul>
      <ul class="flex">
        <li class="py-0.5 px-[5px]">
          <button class="hover:underline focus:underline">Русский</button>
        </li>
        <li class="py-0.5 px-[5px]">
          <button class="hover:underline focus:underline">English</button>
        </li>
      </ul>
    </div>
  </div>
</template>
