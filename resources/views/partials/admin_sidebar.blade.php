<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">

            <a href="{{ route('admin.dashboard') }}" class="nav-link" id="dashboard">
                <i class="nav-icon fas fa-th"></i>
                <p>
                    {{ __('Dashboard') }}
                </p>
            </a>
        </li>

        <li class="nav-item">

            <a href="{{ route('admin.profile.edit') }}" class="nav-link" id="profile">
                <i class="nav-icon fas fa-user-circle"></i>
                <p>
                    {{ __('Profile') }}
                </p>
            </a>
        </li>
        <li class="nav-item has-treeview" id="prices">
            <a href="#" class="nav-link" id="prices_link">
                <i class="nav-icon fas fa-list"></i>
                <p>
                    {{ __('Administration') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.doctors.index') }} --}}
                    <a href="" class="nav-link" id="doctors">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Doctors') }}</p>
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item has-treeview" id="prices">
            <a href="#" class="nav-link" id="prices_link">
                <i class="nav-icon fas fa-list"></i>
                <p>
                    {{ __('General Admin') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.labs.index') }} --}}
                    <a href="" class="nav-link" id="labs">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Lab Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.centers.index') }} --}}
                    <a href="" class="nav-link" id="centers">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Center Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.faranchises.index') }} --}}
                    <a href="" class="nav-link" id="faranchises">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Faranchise Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.machine.index') }} --}}
                    <a href="" class="nav-link" id="machines">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Machine Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.section.index') }} --}}
                    <a href="" class="nav-link" id="sections">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Section Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.departments.index') }} --}}
                    <a href="" class="nav-link" id="department">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Department Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    {{-- {{-- {{ route('admin.payments.index') }} --}}
                    <a href="" class="nav-link" id="payments">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Payment Type Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.airlines.index') }} --}}" class="nav-link" id="airlines">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Airline Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.supervisorshift.index') }} --}}" class="nav-link" id="supervisor_shift">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Supervisor Shift Open') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.usershift.index') }} --}}" class="nav-link" id="user_shift">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('User Shift Open') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.discountrole.index') }} --}}" class="nav-link" id="discountrole">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Discount Role') }}</p>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item has-treeview" id="prices">
            <a href="#" class="nav-link" id="prices_link">
                <i class="nav-icon fas fa-list"></i>
                <p>
                    {{ __('Test Management') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.pattern.index') }} --}}" class="nav-link" id="patterns">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Pattern Registraton') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.sample.index') }} --}}" class="nav-link" id="samples">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Sample Requirement') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.units.index') }} --}}" class="nav-link" id="units">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Unit Registraton') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_registration.index') }} --}}" class="nav-link" id="test_registration">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Registraton List') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_vendor_registration.index') }} --}}" class="nav-link"
                    id="test_vendor_registration">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Vendor Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.age_classification.index') }} --}}" class="nav-link"
                        id="age_classification">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Age Classification') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.normal_range_heading.index') }} --}}" class="nav-link"
                        id="normal_range_heading">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Normal Range Headings') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.product_registration.index') }} --}}" class="nav-link"
                        id="product_registration">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Product Registration') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_normal_range_list.index') }} --}}" class="nav-link"
                        id="TestNormalRange">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Normal Range') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_product_method.index') }} --}}" class="nav-link"
                        id="TestProductMethod">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Product Method') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_price.index') }} --}}" class="nav-link"
                        id="test_price">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Price List') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_heading.index') }} --}}" class="nav-link"
                        id="test_heading">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Define Test Heading') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_result_comments.index') }} --}}" class="nav-link"
                        id="test_result_comments">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Result Comment') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.test_result_comments.index') }} --}}" class="nav-link"
                        id="test_calculate">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Calculate') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.morphology_registration.index') }} --}}" class="nav-link"
                        id="morphology_registration">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Morphology Registrations') }}</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{-- {{ route('admin.package_registrations.index') }} --}}" class="nav-link"
                        id="package_registrations">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Test Package Registrations') }}</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{-- {{ route('admin.cbc_remarks.index') }} --}}" class="nav-link" id="cbc_remarks">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('CBC Remarks') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.define_test_interpretation.index') }} --}}" class="nav-link"
                    id="define_test_interpretation">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Define Test Interpretation') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.product_method_entry.index') }} --}}" class="nav-link"
                    id="product_method_entry">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Radiology Test') }}</p>
                    </a>
                </li>

            </ul>
        </li>
        <li class="nav-item has-treeview" id="prices">
            <a href="#" class="nav-link" id="prices_link">
                <i class="nav-icon fas fa-list"></i>
                <p>
                    {{ __('Vend Management') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.customer_registration.index') }} --}}" class="nav-link"
                        id="customer_registration">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Customer Registraton') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.customer_price_list.index') }} --}}" class="nav-link"
                        id="customer_price_list">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Customer Price List') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.faranchise_price_list.index') }} --}}" class="nav-link"
                        id="faranchise_price_list">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Faranchise Price List') }}</p>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item has-treeview" id="prices">
            <a href="#" class="nav-link" id="prices_link">
                <i class="nav-icon fas fa-list"></i>
                <p>
                    {{ __('Patients Management') }}
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.patients.index') }} --}}" class="nav-link" id="patients">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Patients Registraton') }}</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{-- {{ route('admin.groups.index') }} --}}" class="nav-link" id="groups">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Cash and Credits Invoices') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.searching') }} --}}" class="nav-link" id="searching">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Invoice searching') }} </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.invoice_cancel_req', '0') }}--}}" class="nav-link" id="invoice_cancel">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Invoice Cancel Request') }}</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{-- {{ route('admin.invoice_statuses') }}--}}" class="nav-link" id="invoice_statuses">
                        <i class="far fa-circle nav-icon"></i>
                        <p>{{ __('Cancel Request Status') }}</p>
                    </a>
                </li>


            </ul>
        </li>











    </ul>
    
</nav>
