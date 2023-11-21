const clientRouter = [
    {
        path: "/",
        component: () => import("../layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "qlsv.index",
                meta: {title: "Trang Chủ - QLSV - App", isAuth: true},
                component: () => import("../pages/Home.vue")
            },
            {
                path: "login",
                name: "qlsv.login",
                meta: {title: "Trang Chủ - QLSV - App", isAuth: true},
                component: () => import("../pages/Login.vue")
            },
            {
                path: "register",
                name: "qlsv.register",
                meta: {title: "Trang Chủ - QLSV - App", isAuth: true},
                component: () => import("../pages/Register.vue")
            },
            {
                path: "student/:student_id/edit",
                name: "student.edit",
                meta: { title: "Chỉnh sửa Học Sinh - Quizz App" },
                component: () => import("../pages/Edit.vue")
            },
        ]
    }
]


export default clientRouter;
