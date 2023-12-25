(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        xlR9: function(o, n, t) {
            "use strict";
            t.r(n);
            var e = t("CcnG"),
                r = function() {
                    return function() {}
                }(),
                i = t("pMnS"),
                d = t("Ip0R"),
                c = t("ZYCi"),
                l = function() {
                    return function() {}
                }();
            t.d(n, "DoctorBookingModuleNgFactory", (function() {
                return a
            }));
            var a = e["\u0275cmf"](r, [], (function(o) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [i.a]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, d.NgLocalization, d.NgLocaleLocalization, [e.LOCALE_ID, [2, d["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](1073742336, d.CommonModule, d.CommonModule, []), e["\u0275mpd"](1073742336, c.l, c.l, [
                    [2, c.r],
                    [2, c.k]
                ]), e["\u0275mpd"](1073742336, l, l, []), e["\u0275mpd"](1073742336, r, r, []), e["\u0275mpd"](1024, c.i, (function() {
                    return [
                        [{
                            path: "",
                            children: [{
                                path: "booking-confirm",
                                loadChildren: "./booking-confirm/booking-confirm.module#BookingConfirmModule"
                            }, {
                                path: "instant-consultation",
                                loadChildren: "./instant-consultation/instant-consultation.module#InstantConsultationModule"
                            }, {
                                path: ":doctorName",
                                loadChildren: "./profile-doctor/profile-doctor.module#ProfileDoctorModule"
                            }, {
                                path: ":doctorName/consult",
                                loadChildren: "./profile-doctor/profile-doctor.module#ProfileDoctorModule"
                            }, {
                                path: ":doctorName/:id",
                                loadChildren: "./consultation-doctor/consultation-doctor.module#ConsultationDoctorModule"
                            }, {
                                path: ":doctorName/services/:serviceId",
                                loadChildren: "./doctor-services/doctor-services.module#DoctorServicesModule"
                            }, {
                                path: "comments/:doctorName/:id",
                                loadChildren: "./patient-stories/patient-stories.module#PatientStoriesModule"
                            }]
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);