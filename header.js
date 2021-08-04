//link and css files of head section
$("#headSection").html(`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<title>:: S S Agrawal :: ERP System</title>

<!-- Bootstrap Core and vandor -->
<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css">
<link rel="stylesheet" href="assets/plugins/dropify/css/dropify.min.css">
<link rel="stylesheet" href="assets/plugins/summernote/dist/summernote.css" />
<link rel="stylesheet" href="assets/plugins/sweetalert/sweetalert.css">
<link rel="stylesheet" href="assets/DataTables/datatables.min.css">

<!-- Core css -->
<link rel="stylesheet" href="assets/css/style.min.css" />`)

//left side verticle menu for navigation
$("#left-sidebar").html(`<h5 class="brand-name">S S Agrawal </br>ERP System<a href="javascript:void(0)" class="menu_option float-right"><i class="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
<ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu-uni">Student</a></li>
</ul>
<div class="tab-content mt-3">
    <div class="tab-pane fade show active" id="menu-uni" role="tabpanel">
        <nav class="sidebar-nav">
            <ul class="metismenu">
                <li><a href="students_dashboard.html"><i class="fa fa-dashboard"></i><span>Student Dashboard</span></a></li>
                <li><a href="students_view.html"><i class="fa fa-users"></i><span>Students</span></a></li>
                <li><a href="institutes.html"><i class="fa fa-graduation-cap"></i><span>Institutes</span></a></li>
                <li><a href="courses.html"><i class="fa fa-graduation-cap"></i><span>Courses</span></a></li>
                <li><a href="class.html"><i class="fa fa-graduation-cap"></i><span>Class</span></a></li>
                <li><a href="admin_dashboard.html"><i class="fa fa-dashboard"></i><span>Admin Dashboard</span></a></li>
                <li><a href="admin_pending_applications.html"><i class="fa fa-dashboard"></i><span>Pending Applications</span></a></li>
                <li><a href="admin_selected_applications.html"><i class="fa fa-dashboard"></i><span>Selected Applications</span></a></li>
                <li><a href="admin_rejected_applications.html"><i class="fa fa-dashboard"></i><span>Rejected Applications</span></a></li>
            </ul>
        </nav>
    </div>
</div>`)
    //page top for user profile-logout operation
$("#page_top").html(`<div class="container-fluid">
<div class="page-header">
    <div class="left"> </div>
    <div class="right">
        <div class="notification d-flex">
            <div class="dropdown d-flex">
                <a href="javascript:void(0)" id="user_name" class="chip ml-3" data-toggle="dropdown">
                    <span class="avatar" style="background-image: url(../assets/images/xs/avatar5.jpg)"></span></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="page-profile.html"><i class="dropdown-icon fe fe-user"></i> Profile</a>
                    <a class="dropdown-item" href="" id="log_out"><i class="dropdown-icon fe fe-log-out"></i> Sign out</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`);

let url = "http://localhost:3000"
if (!sessionStorage.length > 0) {
    sessionStorage.clear()
    window.location.href = "login.html"
}

let userData = JSON.parse(sessionStorage.getItem('user'))
$('#user_name').html(userData.name)
$("#log_out").click(async(e) => {
    e.preventDefault()
    await sessionStorage.clear()
    window.location.href = "login.html"
})

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}