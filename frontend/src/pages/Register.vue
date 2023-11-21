<template>
    <div class="container p-3 ">
        <h2 class="text-center pb-4">Đăng Nhập</h2>
        <div class="d-flex justify-content-center">
            <form id="loginForm" class="w-25" method="post" @submit.prevent="register">
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="email">Username: </label>
                    <input v-model="username" type="text" class="form-control" id="username" name="username">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="password">Nhập Mật khẩu: </label>
                    <input v-model="password" type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="fullname">FullName: </label>
                    <input v-model="fullname" type="fullname" class="form-control" id="fullname" name="fullname">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="sdt">SĐT: </label>
                    <input v-model="sdt" type="sdt" class="form-control" id="sdt" name="sdt">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="malop">Mã lớp: </label>
                    <input v-model="malop" type="malop" class="form-control" id="malop" name="malop">
                </div>
                <button type="submit" class="btn btn-primary">Đăng ký</button>
                <br>
                <a class="text-decoration-none pt-2" href="#">
                    <span>Quên Mật Khẩu?</span>
                </a>
            </form>

        </div>
    </div>
</template>


<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router"; 
import { message } from "ant-design-vue";
export default {
    setup() {
        const data = reactive({
            username: '',
            password: '',
            fullname: '',
            malop: '',
            sdt: '',
        })
        const router = useRouter();
        const register = async () => {
            try {
                const res = await axios.post('http://localhost:3000/register', {
                    ...data
                }, {
                    headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' },
                })
                message.success('Đăng ký thành công !')
                router.push({ name: "qlsv.login" })
            } catch (error) {
                message.error('Sai tên tài khoản hoặc mật khẩu !')
            }

        }
        return { ...toRefs(data), register }
    }
}
</script>
