"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialty = void 0;
class Specialty {
    constructor(props, specialty_id) {
        Object.assign(this, props);
        if (specialty_id) {
            this.specialty_id = specialty_id;
        }
    }
}
exports.Specialty = Specialty;
