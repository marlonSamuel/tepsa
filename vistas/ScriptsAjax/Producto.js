console.log("define categorias ajax");

Producto = {
    Listar: function (opcion,callback) {
        $.ajax("../ajax/producto.php?op=" + opcion, {
            type: "GET",
            success: function (data) {
                if (typeof callback === 'function') {
                    callback(data);
                }

            }, error: function (data) {
                toastr.error("Error al obtener los productos");
            }
        });
    },

    Guardar: function (opcion, tipo, callback) {
        $.ajax("../ajax/producto.php?op=" + opcion, {
            type: "POST",
            data: tipo,
            success: function (data) {
                if (data != null) {
                    toastr.info(data);
                }
                else {
                    toastr.error("Error al guardar");
                }
                if (typeof callback === 'function') {
                    callback(data);
                }
            },
            error: function (data) {
                toastr.error("Error al guardar");
            }
        });
    },

    Remover: function (opcion, tipo, callback) {
        $.ajax("../ajax/producto.php?op=" + opcion, {
            type: "POST",
            data: tipo,
            success: function (data) {
                if (data != null) {
                    toastr.info("Producto removido correctamente");

                }
                else {
                    toastr.error("Error al eliminar");
                }
                if (typeof callback === 'function') {
                    callback(data);
                }
            },
            error: function (data) {
                toastr.error("Error al eliminar");
            }
        });
    },


}