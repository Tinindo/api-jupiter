"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partner = void 0;
class Partner {
    constructor(props) {
        props.specialties = props.specialties.map(spec => ({
            specialty_name: spec.specialty_name.toLowerCase()
        }));
        Object.assign(this, props);
    }
}
exports.Partner = Partner;
