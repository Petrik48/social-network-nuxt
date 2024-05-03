<script setup lang="ts">
import Logo from "/assets/svg/logo.svg";
import Tooltip from "assets/svg/tooltip.svg";

definePageMeta({
  layout: "empty",
});
useSeoMeta({
  title: "VK ID",
});

const emailRef = ref("");
const passwordRef = ref("");

const register = async () => {
  await supabase.auth.signUp({
    email: emailRef.value,
    password: passwordRef.value,
  });
};
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div
      class="flex flex-col items-center bg-white rounded-xl my-5 p-7 text-center max-w-[370px]"
    >
      <Logo class="text-primary" />
      <p class="text-m font-medium mt-4">Введите почту</p>
      <p class="text-s font-normal mt-2 text-text-secondary">
        Ваша почта будет использоваться для входа в аккаунт
      </p>
      <UiInput
        v-model="emailRef"
        class="mt-4"
        placeholder="Введите почту"
        type="email"
      />
      <UiInput
        v-model="passwordRef"
        class="mt-4"
        placeholder="Введите пароль"
        type="password"
      />
      <div class="flex items-center self-start mt-4">
        <UiCheckbox id="saveUser" size="24" class="mr-3" />
        <label class="text-text-secondary text-[16px] mr-1" for="saveUser">
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
                Выберите, чтобы сохранить данные аккаунта для быстрого входа на
                этом устройстве
              </p>
            </UiTooltipContent>
          </UiTooltip>
        </UiTooltipProvider>
      </div>
      <div class="flex flex-col justify-between w-full h-[148px]">
        <UiButton class="font-bold mt-7" size="sm" @click="register">
          Продолжить
        </UiButton>
        <div class="text-[11px] text-[#99a2ad]">
          Нажимая «Продолжить», вы принимаете
          <a
            target="_blank"
            href="https://id.vk.com/terms?"
            class="text-[#6d7885] hover:underline focus:underline focus:outline-0"
          >
            пользовательское соглашение
          </a>
          и
          <a
            target="_blank"
            href="https://id.vk.com/privacy?"
            class="text-[#6d7885] hover:underline focus:underline focus:outline-0"
            >политику конфиденциальности
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
