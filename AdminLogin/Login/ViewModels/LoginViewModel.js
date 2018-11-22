
$(document).ready(function () {
    var viewModel = function () {
        debugger;
        var self = this;
        self.email = ko.observable("bbo");
        self.password = ko.observable("vv");
        self.save = function () {
            debugger;
            $.ajax({
                url: "/Home/Login",
                type: "POST",
                data: {
                    email: self.email(),
                    password: self.password()
                }
            })
        }

    }

    ko.applyBindings(new viewModel())


    // executes when HTML-Document is loaded and DOM is ready
    alert("document is ready");
});
