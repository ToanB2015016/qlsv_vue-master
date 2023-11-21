

<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col d-flex">
                <h3>Quản lý học sinh</h3>
                <!-- <el-button class="ml-2" type="success">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <router-link style="color: white;" :to="{ name: 'admin.student.create' }">
                        Tạo mới
                    </router-link>
                </el-button> -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <!-- {{ examsData }} -->
                <el-table :key="componentKey" :data="studentsTableData" style="width: 100%">

                    <el-table-column label="Họ tên" prop="fullname" />
                    <el-table-column label="Mã lớp" prop="malop" />
                    <el-table-column label="SĐT" prop="sdt" />
                    <el-table-column align="right">
                        <template #header>
                            <el-input v-model="search" size="small" placeholder="Type to search" />
                        </template>
                        <template #default="scope">
                            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button size="small" type="danger"
                                @click="handleDeleteStudent(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { studentStore } from "../stores/studentStore";



export default {
    setup() {
        const search = ref('');
        const studentsData = ref([]);
        const store = studentStore();
        const router = useRouter();
        const componentKey = ref(1);

        const studentsTableData = computed(() =>
            studentsData.value.filter(
                (data) =>
                    !search.value ||
                    data.fullname.toLowerCase().includes(search.value.toLowerCase())
            )
        )

        const getData = async () => {
            const res = await axios.get('http://localhost:3000/students/all', {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            })

            store.onSetStudent(res.data.data);
            studentsData.value = res.data.data;

        }
        getData();


        const handleDeleteStudent = async (index, row) => {
            const res = await axios.delete('http://localhost:3000/account/'+row.account_id, {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                withCredentials: false
            })
            store.students.splice(index, 1);
        }
        const handleEdit = (index, row) => {
            router.push({ name: 'student.edit', params: { student_id: row.id } })
        }

        return { studentsTableData, search, handleEdit, handleDeleteStudent, componentKey }
    }
}
</script>
