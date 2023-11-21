<template>
    <div v-if="student.length > 0" class="container mt-3 ">
        <div class="row">
            <h3>Chỉnh sửa hồ sơ</h3>
        </div>
        <div class="row">
            <div class="col-4">
                <el-input v-model="student[0].fullname" :value="student[0].fullname" placeholder="Please input">
                    <template #prepend>Họ tên: </template>
                </el-input>

            </div>
            <div class="col-4">
                <el-input v-model="student[0].malop" :value="student[0].malop" placeholder="Please input">
                    <template #prepend>Lớp: </template>
                </el-input>
            </div>

        </div>
        <div class="row mt-3">
            <div class="col-4">
                <el-input v-model="student[0].sdt" :value="student[0].sdt" placeholder="Please input">
                    <template #prepend>SDT: </template>
                </el-input>
            </div>
            
        </div>
        
        <div class="row mt-3">
            <div class="col">
                <el-button class="mr-2" type="primary" @click="updateStudent" plain>Cập nhật</el-button>
                <router-link :to="{ name: 'qlsv.index' }">
                    <el-button type="warning">
                        Quay lại
                    </el-button>
                </router-link>
            </div>
        </div>
    </div>
    <!-- {{ student }} -->
</template>

<script>
import { studentStore } from '../stores/studentStore';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { message } from 'ant-design-vue';

export default {
    setup() {
        const route = useRoute();
        const store = studentStore();
        const student = ref([]);
        watch(() => store.students, (students) => {
            student.value = students
        })
        onMounted(() => {
            if (store.students.length > 0) {
                student.value = store.students.filter(ele => {
                    return ele.id == route.params.student_id
                });
            } else {
                axios.get(`/student/${route.params.student_id}`);
            }
            console.log(student.value);
        })

        const updateStudent = () => {
            axios.put(`/api/teacher/${route.params.student_id}/updateStudent`, {
                ...student.value[0]
            })
                .then(res => {
                    message.success(res.data);
                })
                .catch(err => {
                    message.error(err.response.data)
                })
        }
        return { student, updateStudent }
    }
}
</script>
