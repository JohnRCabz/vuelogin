<template>
  <div class="flex h-screen">
    <!-- Left Section with Logo -->
    <div class="w-2/5 bg-gray-100 flex justify-center items-center">
      <img
        alt="VIP Tutors Logo"
        src="../assets/logo.png"
        class="w-80 absolute top-10 mt-5"
      />
    </div>

    <!-- Right Section with Login Form -->
    <div class="w-3/5 flex justify-center items-center bg-white h-full">
      <div class="w-full max-w-md p-6">
        <h1 class="text-3xl font-semibold mb-10">Sign in to your account</h1>
        <form @submit.prevent="login">
          <!-- Username/Email Input -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">
              Username / Email Address / Mobile
            </label>
            <input
              v-model="form.username"
              type="text"
              class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <!-- Password Input -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              v-model="form.password"
              type="password"
              class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <!-- Forgot Password -->
          <p class="mt-4 text-sm">
            Forgot your password?
            <a href="#" class="text-orange-500 font-semibold">Reset Password</a>
          </p>

          <!-- CAPTCHA -->
          <div class="mb-4">
            <div class="flex items-center mt-2">
              <canvas
                ref="captchaCanvas"
                width="200"
                height="60"
                class="border rounded-md"
              ></canvas>
              <button
                type="button"
                @click="refreshCaptcha"
                class="ml-2 p-2 border rounded-md bg-gray-500 text-white hover:bg-gray-700"
              >
                <i class="fas fa-sync-alt"></i>
              </button>
            </div>
            <label class="block text-sm font-medium text-gray-700 mt-2">
              Enter the characters you see above
            </label>
            <input
              v-model="form.captcha"
              type="text"
              class="w-full mt-2 p-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full py-2 mt-2 text-white bg-blue-900 rounded-full hover:bg-blue-800"
          >
            Login
          </button>

          <!-- Create Account Link -->
          <p class="mt-4 text-sm">
            Don’t have an account?
            <a href="#" class="text-orange-500 font-semibold">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  username: "",
  password: "",
  captcha: "",
});

const captchaText = ref("");

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText.value = text;
  drawCaptcha(text);
};

const drawCaptcha = (text) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Add green background
  ctx.fillStyle = "#e0f7e0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add background noise in shades of green
  for (let i = 0; i < 50; i++) {
    ctx.fillStyle = `rgba(0, ${Math.floor(Math.random() * 255)}, 0, 0.3)`;
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 5,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  // Draw CAPTCHA text with distortion in black and white
  ctx.font = "30px Arial";
  for (let i = 0; i < text.length; i++) {
    const x = 20 + i * 30;
    const y = 30 + Math.random() * 10;
    const angle = Math.random() * 0.5 - 0.25;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = i % 2 === 0 ? "#000" : "#fff";
    ctx.fillText(text[i], 0, 0);
    ctx.restore();
  }

  // Add lines for more distortion in shades of green
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `rgba(0, ${Math.floor(Math.random() * 255)}, 0, 0.5)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }
};

const refreshCaptcha = () => {
  generateCaptcha();
};

const router = useRouter();

const login = () => {
  // if (form.captcha !== captchaText.value) {
  //   alert("CAPTCHA does not match!");
  //   return;
  // }
  alert("Login submitted with: " + JSON.stringify(form));
  router.push('/');
};

onMounted(() => {
  generateCaptcha();
});
</script>

<style scoped>
/* Custom styling for better spacing and font consistency */
</style>
