function getListNodes () {
     jQuery.ajax({
         type: "GET",
         url: "http://localhost:3000/listNodes",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (data, status, jqXHR) {
			 return data;
         },

         error: function (jqXHR, status) {
             // error handler
         }
});
}
