<template>
    <header class="p-2 bg-dark text-white">
        <div class="container-fluid">
            <div class="d-flex flex-wrap align-items-center justify-content-around">
                <router-link :to="{ name: 'qlsv.index' }"
                    class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img width="100" height="50" src="https://dmoj.ctu.edu.vn/static/icons/logo.svg" alt>
                </router-link>

                

                <span id="user-links">
                    <a href="#" style="margin-right: 5px; padding-top: 10px;">
                        <i class="fa fa-exclamation-triangle" style="color: yellow;"></i>
                    </a>
                    <a id="flag_vi" href="#" onclick="submmit_language('vi')" style="margin-right: 5px; margin-top: 4px;">
                        <img src="https://cdn-icons-png.flaticon.com/128/555/555515.png" alt="VI" height="24">
                    </a>
                    <a id="flag_en" href="#" onclick="submmit_language('en')" style="margin-right: 5px; margin-top: 4px;">
                        <img src="https://cdn-icons-png.flaticon.com/128/555/555417.png" alt="EN" height="24">
                    </a>
                    <span class="anon" v-if="!auth">
                        <router-link :to="{ name: 'qlsv.login' }" class="text-decoration-none text-white">
                            <b>Đăng nhập</b>
                        </router-link>
                        &nbsp;hoặc&nbsp;
                        <router-link :to="{ name: 'qlsv.register' }" class="text-decoration-none text-white"><b>Đăng
                                ký</b></router-link>
                    </span>
                    <span class="anon" v-else>
                        <span v-if="user && user.username" class="mr-2">Xin chào,
                            
                                {{ user.username }}
                        </span>
                        <router-link @click="logout" :to="{ name: 'qlsv.login' }"
                            class="text-decoration-none text-white">
                            <b>Đăng xuất</b>
                        </router-link>
                    </span>
                </span>
            </div>
        </div>
        <!-- {{ auth }} -->
    </header>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { authenStore } from "../stores/authenStore";

export default {
    setup() {
        const store = authenStore();
        const router = useRouter();
        const auth = computed(() => store.authenticated)
        const user = computed(() => store.user)

        const logout = async () => {
            window.localStorage.removeItem("user");
        }


        return { auth, user, logout }
    }
}
</script>
