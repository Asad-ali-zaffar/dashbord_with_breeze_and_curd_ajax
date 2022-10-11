<!-- Sidebar -->
<aside class="main-sidebar sidebar-dark-primary  ">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="{{url('img/logo_sidebar.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3">
      <span class="brand-text font-weight-light"></span>
    </a>
    <!-- \Brand Logo -->

    <div class="sidebar ">
      <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="{{url('dist/img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">

                {{Auth::user()->name}}
            </a>
          </div>
        </div>
        <!-- Sidebar Menu -->
        <!-- Admin sidebar -->

        @include('partials.admin_sidebar')
        <!-- \Admin sidebar -->

    </div>
</aside>
<!-- /.sidebar -->
