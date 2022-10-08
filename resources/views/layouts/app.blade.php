<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>ERP Pesticide | @yield('title') </title>
    @include('partials.head')
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="hold-transition sidebar-mini layout-fixed text-sm sidebar-collapse">
    {{-- <div class="preloader">
    </div>
    <div class="loader"></div> --}}

    <div class="wrapper">
{{-- <body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100"> --}}
        @include('layouts.navigation')

        <!-- Page Heading -->
        @if (isset($header))
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>
        @endif
        @include('partials.sidebar')
        <!-- Page Content -->
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            @yield('breadcrumb')
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    @include('partials.validation_errors')
                    @yield('content')
                    <input type="hidden" id="system_currency" value="{{ cache('currency') }}">
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->

            {{-- <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-10">
                {{ $slot }}

            </main> --}}
        </div>
        @include('partials.scripts')
        @yield('scripts')
    </div>
</body>

</html>
