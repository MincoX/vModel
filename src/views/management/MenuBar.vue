<template>
    <div class="wrapper">
        <!-- Navbar -->
        <nav
            class="main-header navbar navbar-expand navbar-white navbar-light underly"
        >
            <!-- Left navbar links -->
            <!-- SEARCH FORM -->
            <form class="form-inline ml-3">
                <div class="input-group input-group-sm">
                    <input
                        class="form-control form-control-navbar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                    >
                        <i class="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="" class="brand-link">
                <img
                    src="~@/assets/img/logo.png"
                    class="brand-image img-circle elevation-3"
                    style="opacity: 0.8"
                />
                <span class="brand-text font-weight-light">Location</span>
            </a>

            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img
                            src="~@/assets/img/logo.png"
                            class="img-circle elevation-2"
                        />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">username</a>
                    </div>
                </div>
                <nav class="mt-2">
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Index
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/management/index1"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index1</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        to="/management/index2"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index2</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        to="/management/index3"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>index3</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li class="nav-item has-treeview menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link
                                        to="/dashboard1"
                                        class="nav-link"
                                    >
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>dashboard1</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <!-- /.content-header -->
            <hr />
            <!-- Main content -->
            <section class="content">
                <router-view />
                <!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>

        <!-- /.content-wrapper -->

        <footer class="main-footer">
            <strong> MincoX 2021 </strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.0.0
            </div>
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
</template>

<script>
export default {
    components: {},
    methods: {
        Dashboard1: function () {
            this.$router.push("/dashboard1");
        },
        Dashboard2: function () {
            this.$router.push("/dashboard2");
        },
    },
};
</script>

<style lang="scss" scoped>
.underly {
    z-index: 1;
}
</style>
