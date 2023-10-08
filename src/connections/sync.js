import { Category } from "../models/Category.js";
import { Contact } from "../models/Contact.js";
import { Institute } from "../models/Institute.js";
import { Locality } from "../models/Locality.js";
import { Modality } from "../models/Modality.js";
import { Province } from "../models/Province.js";
import { TimeUnit } from "../models/TimeUnit.js";
import { TypeCareer } from "../models/TypeCareer.js";
import { Ubication } from "../models/Ubication.js";
import { User } from "../models/User.js";
import { Career } from "../models/Careers.js";
import { sequelize } from "./db.js";
export const createTablesAndRelations = async () => {
    Institute.belongsTo(Category, { foreignKey: 'id_category' });
    Institute.belongsTo(Ubication, { foreignKey: 'id_ubication' });

    Institute.hasMany(Institute, { foreignKey: 'id_institute' });
    Institute.belongsTo(Institute, { foreignKey: 'id_institute' })

    Contact.hasMany(Institute, { foreignKey: 'id_contact' });
    Institute.belongsTo(Contact, { foreignKey: 'id_contact' })

    Province.hasMany(Locality, { foreignKey: 'id_province' })
    Locality.belongsTo(Province, { foreignKey: 'id_province' });
    Ubication.belongsTo(Locality, { foreignKey: 'id_locality' });
    Locality.hasOne(Ubication, { foreignKey: 'id_locality' });


    Institute.hasMany(Career, { foreignKey: 'id_institute' })
    Career.belongsTo(Institute, { foreignKey: 'id_institute' })

    TypeCareer.hasOne(Career, { foreignKey: 'id_type_career' });
    Modality.hasOne(Career, { foreignKey: 'id_modality' })
    TimeUnit.hasOne(Career, { foreignKey: 'id_time_unit' })

    Institute.belongsTo(User, { foreignKey: 'id_user' });
    User.hasMany(Institute, { foreignKey: 'id_user' });

    await sequelize.sync({ force: true })
}

