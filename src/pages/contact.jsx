import React from "react";

const Contact = () => {
    return (
        <div className="d-flex flex-column justify-content-center p-3 container bg-light gap-3">
            <h1 className="display-2 text-center text-primary"><i class="fa-solid fa-address-card"></i> Contacto</h1>
            <div className="row">
                <h3 className="col-md-3 col-sm-12"><i class="fa-solid fa-signature text-primary"></i> Nombre</h3>
                <h3 className="col-md-9 col-sm-12">### -#### -#### -#########</h3>
                <hr />
                <h3 className="col-md-3 col-sm-12"><i class="fa-solid fa-signature text-primary"></i> Apellidos</h3>
                <h3 className="col-md-9 col-sm-12">### -#### -#### -#########</h3>
                <hr />
                <h3 className="col-md-3 col-sm-12"><i class="fa-solid fa-envelope text-primary"></i> Correo</h3>
                <h3 className="col-md-9 col-sm-12">### -#### -#### -#########</h3>
                <hr />
                <h3 className="col-md-3 col-sm-12"><i class="fa-solid fa-phone text-primary"></i> Teléfono</h3>
                <h3 className="col-md-9 col-sm-12">### -#### -#### -#########</h3>
                <hr />
                <h3 className="col-md-3 col-sm-12"><i class="fa-solid fa-briefcase text-primary"></i> Asignatura</h3>
                <h3 className="col-md-9 col-sm-12">### -#### -#### -#########</h3>
            </div>
        </div>
    );
};

export default Contact;