<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Login</title>

    <!-- Your custom MDB 5.0.0 stylesheet URL -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css">

</head>

<body>
<?php
session_start();

if ( isset( $_POST[ 'check' ] ) )  
 {
    $username = 'admin';

    $password = '1234';

    if ( $_POST[ 'username' ] == $username && $_POST[ 'password' ] == $password ) {
        $_SESSION[ 'username' ] = $username;
        header( 'location:Quiz.html' );
    } else {        
        echo "<script>alert('Woops! Email or Password is Wrong. Try again!')</script>";
    }
}
?>
    <!-- Start your project here-->
    <form action="" method="post">
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <h3 class="mb-5">Sign in</h3>

                                <div class="form-outline mb-4">
                                    <input type="text" class="form-control form-control-lg" name="username" required>
                                    <label class="form-label">Username</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" class="form-control form-control-lg" name="password" required>
                                    <label class="form-label">Password</label>
                                </div>

                                <button class="btn btn-primary btn-lg btn-block" type="submit" name="check">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
    <!-- End your project here-->

    <!-- Your custom MDB 5.0.0 javascript URL-->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></script>

</body>

</html>
