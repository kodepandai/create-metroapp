/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @example {"email":"leon@mail.com","password":"password"} */
export interface LoginBodyDto {
  /** @format email */
  email: string;
  password: string;
}

export interface SchemaHolderClass {
  message: string;
  data: {
    token: string;
  };
}

export interface OneUserResponse {
  message: string;
  data: {
    id: number;
    username: string;
    name: string;
    /** @format email */
    email: string;
    /** @format date-time */
    created_at: string;
    user_roles: {
      role: {
        id: number;
        name: string;
      };
    }[];
  };
}

export interface AbilityResponse {
  message: string;
  data: {
    id: number;
    resource: string;
    action: string;
  }[];
}

export interface CreateUserBodyDto {
  /** @minLength 3 */
  name: string;
  /** @minLength 3 */
  username: string;
  /** @format email */
  email: string;
  /** @minLength 3 */
  password: string;
  role_id: number | null;
}

export interface FindAllResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      name: string;
      username: string;
      /** @format email */
      email: string;
      password?: string;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      user_roles: {
        role: {
          id: number;
          name: string;
        };
      }[];
    }[];
  };
}

export interface UpdateUserBodyDto {
  /** @minLength 3 */
  name: string;
  /** @minLength 3 */
  username: string;
  /** @format email */
  email: string;
  /** @minLength 3 */
  password?: string | null;
  role_id: number | null;
}

export interface DeleteUserResponse {
  message: string;
  data: {
    id: number;
    name: string;
    username: string;
    /** @format email */
    email: string;
    password?: string;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface OptionResponse {
  message: string;
  data: {
    label: string;
    value: string;
  }[];
}

export interface CreateRoleBodyDto {
  /** @minLength 1 */
  name: string;
  permissions?: (
    | "*"
    | "User.*"
    | "User.create"
    | "User.read"
    | "User.update"
    | "User.delete"
    | "Group.*"
    | "Group.create"
    | "Group.read"
    | "Group.update"
    | "Group.delete"
    | "EntityType.*"
    | "EntityType.create"
    | "EntityType.read"
    | "EntityType.update"
    | "EntityType.delete"
    | "EntityCategory.*"
    | "EntityCategory.create"
    | "EntityCategory.read"
    | "EntityCategory.update"
    | "EntityCategory.delete"
    | "Entity.*"
    | "Entity.create"
    | "Entity.read"
    | "Entity.update"
    | "Entity.delete"
    | "Nop.*"
    | "Nop.create"
    | "Nop.read"
    | "Nop.update"
    | "Nop.delete"
    | "Property.*"
    | "Property.create"
    | "Property.read"
    | "Property.update"
    | "Property.delete"
    | "Certificate.*"
    | "Certificate.create"
    | "Certificate.read"
    | "Certificate.update"
    | "Certificate.delete"
    | "Pbb.*"
    | "Pbb.create"
    | "Pbb.read"
    | "Pbb.update"
    | "Pbb.delete"
    | "CertificateNop.*"
    | "CertificateNop.create"
    | "CertificateNop.read"
    | "CertificateNop.update"
    | "CertificateNop.delete"
    | "Crm.*"
    | "Crm.create"
    | "Crm.read"
    | "Crm.update"
    | "Crm.delete"
    | "Legal.*"
    | "Legal.create"
    | "Legal.read"
    | "Legal.update"
    | "Legal.delete"
    | "LegalParty.*"
    | "LegalParty.create"
    | "LegalParty.read"
    | "LegalParty.update"
    | "LegalParty.delete"
    | "LegalWitness.*"
    | "LegalWitness.create"
    | "LegalWitness.read"
    | "LegalWitness.update"
    | "LegalWitness.delete"
    | "Province.*"
    | "Province.create"
    | "Province.read"
    | "Province.update"
    | "Province.delete"
    | "City.*"
    | "City.create"
    | "City.read"
    | "City.update"
    | "City.delete"
    | "District.*"
    | "District.create"
    | "District.read"
    | "District.update"
    | "District.delete"
    | "SubDistrict.*"
    | "SubDistrict.create"
    | "SubDistrict.read"
    | "SubDistrict.update"
    | "SubDistrict.delete"
    | "Media.*"
    | "Media.create"
    | "Media.read"
    | "Media.update"
    | "Media.delete"
    | "EntityMedia.*"
    | "EntityMedia.create"
    | "EntityMedia.read"
    | "EntityMedia.update"
    | "EntityMedia.delete"
    | "PbbMedia.*"
    | "PbbMedia.create"
    | "PbbMedia.read"
    | "PbbMedia.update"
    | "PbbMedia.delete"
    | "CertificateMedia.*"
    | "CertificateMedia.create"
    | "CertificateMedia.read"
    | "CertificateMedia.update"
    | "CertificateMedia.delete"
    | "PropertyMedia.*"
    | "PropertyMedia.create"
    | "PropertyMedia.read"
    | "PropertyMedia.update"
    | "PropertyMedia.delete"
    | "Role.*"
    | "Role.create"
    | "Role.read"
    | "Role.update"
    | "Role.delete"
    | "ActivityLog.*"
    | "ActivityLog.create"
    | "ActivityLog.read"
    | "ActivityLog.update"
    | "ActivityLog.delete"
    | "UserRole.*"
    | "UserRole.create"
    | "UserRole.read"
    | "UserRole.update"
    | "UserRole.delete"
  )[];
}

export interface OneRoleResponse {
  message: string;
  data: {
    id: number;
    name: string;
    permissions: (
      | "*"
      | "User.*"
      | "User.create"
      | "User.read"
      | "User.update"
      | "User.delete"
      | "Group.*"
      | "Group.create"
      | "Group.read"
      | "Group.update"
      | "Group.delete"
      | "EntityType.*"
      | "EntityType.create"
      | "EntityType.read"
      | "EntityType.update"
      | "EntityType.delete"
      | "EntityCategory.*"
      | "EntityCategory.create"
      | "EntityCategory.read"
      | "EntityCategory.update"
      | "EntityCategory.delete"
      | "Entity.*"
      | "Entity.create"
      | "Entity.read"
      | "Entity.update"
      | "Entity.delete"
      | "Nop.*"
      | "Nop.create"
      | "Nop.read"
      | "Nop.update"
      | "Nop.delete"
      | "Property.*"
      | "Property.create"
      | "Property.read"
      | "Property.update"
      | "Property.delete"
      | "Certificate.*"
      | "Certificate.create"
      | "Certificate.read"
      | "Certificate.update"
      | "Certificate.delete"
      | "Pbb.*"
      | "Pbb.create"
      | "Pbb.read"
      | "Pbb.update"
      | "Pbb.delete"
      | "CertificateNop.*"
      | "CertificateNop.create"
      | "CertificateNop.read"
      | "CertificateNop.update"
      | "CertificateNop.delete"
      | "Crm.*"
      | "Crm.create"
      | "Crm.read"
      | "Crm.update"
      | "Crm.delete"
      | "Legal.*"
      | "Legal.create"
      | "Legal.read"
      | "Legal.update"
      | "Legal.delete"
      | "LegalParty.*"
      | "LegalParty.create"
      | "LegalParty.read"
      | "LegalParty.update"
      | "LegalParty.delete"
      | "LegalWitness.*"
      | "LegalWitness.create"
      | "LegalWitness.read"
      | "LegalWitness.update"
      | "LegalWitness.delete"
      | "Province.*"
      | "Province.create"
      | "Province.read"
      | "Province.update"
      | "Province.delete"
      | "City.*"
      | "City.create"
      | "City.read"
      | "City.update"
      | "City.delete"
      | "District.*"
      | "District.create"
      | "District.read"
      | "District.update"
      | "District.delete"
      | "SubDistrict.*"
      | "SubDistrict.create"
      | "SubDistrict.read"
      | "SubDistrict.update"
      | "SubDistrict.delete"
      | "Media.*"
      | "Media.create"
      | "Media.read"
      | "Media.update"
      | "Media.delete"
      | "EntityMedia.*"
      | "EntityMedia.create"
      | "EntityMedia.read"
      | "EntityMedia.update"
      | "EntityMedia.delete"
      | "PbbMedia.*"
      | "PbbMedia.create"
      | "PbbMedia.read"
      | "PbbMedia.update"
      | "PbbMedia.delete"
      | "CertificateMedia.*"
      | "CertificateMedia.create"
      | "CertificateMedia.read"
      | "CertificateMedia.update"
      | "CertificateMedia.delete"
      | "PropertyMedia.*"
      | "PropertyMedia.create"
      | "PropertyMedia.read"
      | "PropertyMedia.update"
      | "PropertyMedia.delete"
      | "Role.*"
      | "Role.create"
      | "Role.read"
      | "Role.update"
      | "Role.delete"
      | "ActivityLog.*"
      | "ActivityLog.create"
      | "ActivityLog.read"
      | "ActivityLog.update"
      | "ActivityLog.delete"
      | "UserRole.*"
      | "UserRole.create"
      | "UserRole.read"
      | "UserRole.update"
      | "UserRole.delete"
    )[];
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface FindAllRoleResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      name: string;
      permissions: (
        | "*"
        | "User.*"
        | "User.create"
        | "User.read"
        | "User.update"
        | "User.delete"
        | "Group.*"
        | "Group.create"
        | "Group.read"
        | "Group.update"
        | "Group.delete"
        | "EntityType.*"
        | "EntityType.create"
        | "EntityType.read"
        | "EntityType.update"
        | "EntityType.delete"
        | "EntityCategory.*"
        | "EntityCategory.create"
        | "EntityCategory.read"
        | "EntityCategory.update"
        | "EntityCategory.delete"
        | "Entity.*"
        | "Entity.create"
        | "Entity.read"
        | "Entity.update"
        | "Entity.delete"
        | "Nop.*"
        | "Nop.create"
        | "Nop.read"
        | "Nop.update"
        | "Nop.delete"
        | "Property.*"
        | "Property.create"
        | "Property.read"
        | "Property.update"
        | "Property.delete"
        | "Certificate.*"
        | "Certificate.create"
        | "Certificate.read"
        | "Certificate.update"
        | "Certificate.delete"
        | "Pbb.*"
        | "Pbb.create"
        | "Pbb.read"
        | "Pbb.update"
        | "Pbb.delete"
        | "CertificateNop.*"
        | "CertificateNop.create"
        | "CertificateNop.read"
        | "CertificateNop.update"
        | "CertificateNop.delete"
        | "Crm.*"
        | "Crm.create"
        | "Crm.read"
        | "Crm.update"
        | "Crm.delete"
        | "Legal.*"
        | "Legal.create"
        | "Legal.read"
        | "Legal.update"
        | "Legal.delete"
        | "LegalParty.*"
        | "LegalParty.create"
        | "LegalParty.read"
        | "LegalParty.update"
        | "LegalParty.delete"
        | "LegalWitness.*"
        | "LegalWitness.create"
        | "LegalWitness.read"
        | "LegalWitness.update"
        | "LegalWitness.delete"
        | "Province.*"
        | "Province.create"
        | "Province.read"
        | "Province.update"
        | "Province.delete"
        | "City.*"
        | "City.create"
        | "City.read"
        | "City.update"
        | "City.delete"
        | "District.*"
        | "District.create"
        | "District.read"
        | "District.update"
        | "District.delete"
        | "SubDistrict.*"
        | "SubDistrict.create"
        | "SubDistrict.read"
        | "SubDistrict.update"
        | "SubDistrict.delete"
        | "Media.*"
        | "Media.create"
        | "Media.read"
        | "Media.update"
        | "Media.delete"
        | "EntityMedia.*"
        | "EntityMedia.create"
        | "EntityMedia.read"
        | "EntityMedia.update"
        | "EntityMedia.delete"
        | "PbbMedia.*"
        | "PbbMedia.create"
        | "PbbMedia.read"
        | "PbbMedia.update"
        | "PbbMedia.delete"
        | "CertificateMedia.*"
        | "CertificateMedia.create"
        | "CertificateMedia.read"
        | "CertificateMedia.update"
        | "CertificateMedia.delete"
        | "PropertyMedia.*"
        | "PropertyMedia.create"
        | "PropertyMedia.read"
        | "PropertyMedia.update"
        | "PropertyMedia.delete"
        | "Role.*"
        | "Role.create"
        | "Role.read"
        | "Role.update"
        | "Role.delete"
        | "ActivityLog.*"
        | "ActivityLog.create"
        | "ActivityLog.read"
        | "ActivityLog.update"
        | "ActivityLog.delete"
        | "UserRole.*"
        | "UserRole.create"
        | "UserRole.read"
        | "UserRole.update"
        | "UserRole.delete"
      )[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface AllPermissionResponse {
  message: string;
  data: {
    id: number;
    resource:
      | "User"
      | "Group"
      | "EntityType"
      | "EntityCategory"
      | "Entity"
      | "Nop"
      | "Property"
      | "Certificate"
      | "Pbb"
      | "CertificateNop"
      | "Crm"
      | "Legal"
      | "LegalParty"
      | "LegalWitness"
      | "Province"
      | "City"
      | "District"
      | "SubDistrict"
      | "Media"
      | "EntityMedia"
      | "PbbMedia"
      | "CertificateMedia"
      | "PropertyMedia"
      | "Role"
      | "ActivityLog"
      | "UserRole";
    permissions: (
      | "*"
      | "User.*"
      | "User.create"
      | "User.read"
      | "User.update"
      | "User.delete"
      | "Group.*"
      | "Group.create"
      | "Group.read"
      | "Group.update"
      | "Group.delete"
      | "EntityType.*"
      | "EntityType.create"
      | "EntityType.read"
      | "EntityType.update"
      | "EntityType.delete"
      | "EntityCategory.*"
      | "EntityCategory.create"
      | "EntityCategory.read"
      | "EntityCategory.update"
      | "EntityCategory.delete"
      | "Entity.*"
      | "Entity.create"
      | "Entity.read"
      | "Entity.update"
      | "Entity.delete"
      | "Nop.*"
      | "Nop.create"
      | "Nop.read"
      | "Nop.update"
      | "Nop.delete"
      | "Property.*"
      | "Property.create"
      | "Property.read"
      | "Property.update"
      | "Property.delete"
      | "Certificate.*"
      | "Certificate.create"
      | "Certificate.read"
      | "Certificate.update"
      | "Certificate.delete"
      | "Pbb.*"
      | "Pbb.create"
      | "Pbb.read"
      | "Pbb.update"
      | "Pbb.delete"
      | "CertificateNop.*"
      | "CertificateNop.create"
      | "CertificateNop.read"
      | "CertificateNop.update"
      | "CertificateNop.delete"
      | "Crm.*"
      | "Crm.create"
      | "Crm.read"
      | "Crm.update"
      | "Crm.delete"
      | "Legal.*"
      | "Legal.create"
      | "Legal.read"
      | "Legal.update"
      | "Legal.delete"
      | "LegalParty.*"
      | "LegalParty.create"
      | "LegalParty.read"
      | "LegalParty.update"
      | "LegalParty.delete"
      | "LegalWitness.*"
      | "LegalWitness.create"
      | "LegalWitness.read"
      | "LegalWitness.update"
      | "LegalWitness.delete"
      | "Province.*"
      | "Province.create"
      | "Province.read"
      | "Province.update"
      | "Province.delete"
      | "City.*"
      | "City.create"
      | "City.read"
      | "City.update"
      | "City.delete"
      | "District.*"
      | "District.create"
      | "District.read"
      | "District.update"
      | "District.delete"
      | "SubDistrict.*"
      | "SubDistrict.create"
      | "SubDistrict.read"
      | "SubDistrict.update"
      | "SubDistrict.delete"
      | "Media.*"
      | "Media.create"
      | "Media.read"
      | "Media.update"
      | "Media.delete"
      | "EntityMedia.*"
      | "EntityMedia.create"
      | "EntityMedia.read"
      | "EntityMedia.update"
      | "EntityMedia.delete"
      | "PbbMedia.*"
      | "PbbMedia.create"
      | "PbbMedia.read"
      | "PbbMedia.update"
      | "PbbMedia.delete"
      | "CertificateMedia.*"
      | "CertificateMedia.create"
      | "CertificateMedia.read"
      | "CertificateMedia.update"
      | "CertificateMedia.delete"
      | "PropertyMedia.*"
      | "PropertyMedia.create"
      | "PropertyMedia.read"
      | "PropertyMedia.update"
      | "PropertyMedia.delete"
      | "Role.*"
      | "Role.create"
      | "Role.read"
      | "Role.update"
      | "Role.delete"
      | "ActivityLog.*"
      | "ActivityLog.create"
      | "ActivityLog.read"
      | "ActivityLog.update"
      | "ActivityLog.delete"
      | "UserRole.*"
      | "UserRole.create"
      | "UserRole.read"
      | "UserRole.update"
      | "UserRole.delete"
    )[];
  }[];
}

export interface UpdateRoleBodyDto {
  /** @minLength 1 */
  name: string;
  permissions?: (
    | "*"
    | "User.*"
    | "User.create"
    | "User.read"
    | "User.update"
    | "User.delete"
    | "Group.*"
    | "Group.create"
    | "Group.read"
    | "Group.update"
    | "Group.delete"
    | "EntityType.*"
    | "EntityType.create"
    | "EntityType.read"
    | "EntityType.update"
    | "EntityType.delete"
    | "EntityCategory.*"
    | "EntityCategory.create"
    | "EntityCategory.read"
    | "EntityCategory.update"
    | "EntityCategory.delete"
    | "Entity.*"
    | "Entity.create"
    | "Entity.read"
    | "Entity.update"
    | "Entity.delete"
    | "Nop.*"
    | "Nop.create"
    | "Nop.read"
    | "Nop.update"
    | "Nop.delete"
    | "Property.*"
    | "Property.create"
    | "Property.read"
    | "Property.update"
    | "Property.delete"
    | "Certificate.*"
    | "Certificate.create"
    | "Certificate.read"
    | "Certificate.update"
    | "Certificate.delete"
    | "Pbb.*"
    | "Pbb.create"
    | "Pbb.read"
    | "Pbb.update"
    | "Pbb.delete"
    | "CertificateNop.*"
    | "CertificateNop.create"
    | "CertificateNop.read"
    | "CertificateNop.update"
    | "CertificateNop.delete"
    | "Crm.*"
    | "Crm.create"
    | "Crm.read"
    | "Crm.update"
    | "Crm.delete"
    | "Legal.*"
    | "Legal.create"
    | "Legal.read"
    | "Legal.update"
    | "Legal.delete"
    | "LegalParty.*"
    | "LegalParty.create"
    | "LegalParty.read"
    | "LegalParty.update"
    | "LegalParty.delete"
    | "LegalWitness.*"
    | "LegalWitness.create"
    | "LegalWitness.read"
    | "LegalWitness.update"
    | "LegalWitness.delete"
    | "Province.*"
    | "Province.create"
    | "Province.read"
    | "Province.update"
    | "Province.delete"
    | "City.*"
    | "City.create"
    | "City.read"
    | "City.update"
    | "City.delete"
    | "District.*"
    | "District.create"
    | "District.read"
    | "District.update"
    | "District.delete"
    | "SubDistrict.*"
    | "SubDistrict.create"
    | "SubDistrict.read"
    | "SubDistrict.update"
    | "SubDistrict.delete"
    | "Media.*"
    | "Media.create"
    | "Media.read"
    | "Media.update"
    | "Media.delete"
    | "EntityMedia.*"
    | "EntityMedia.create"
    | "EntityMedia.read"
    | "EntityMedia.update"
    | "EntityMedia.delete"
    | "PbbMedia.*"
    | "PbbMedia.create"
    | "PbbMedia.read"
    | "PbbMedia.update"
    | "PbbMedia.delete"
    | "CertificateMedia.*"
    | "CertificateMedia.create"
    | "CertificateMedia.read"
    | "CertificateMedia.update"
    | "CertificateMedia.delete"
    | "PropertyMedia.*"
    | "PropertyMedia.create"
    | "PropertyMedia.read"
    | "PropertyMedia.update"
    | "PropertyMedia.delete"
    | "Role.*"
    | "Role.create"
    | "Role.read"
    | "Role.update"
    | "Role.delete"
    | "ActivityLog.*"
    | "ActivityLog.create"
    | "ActivityLog.read"
    | "ActivityLog.update"
    | "ActivityLog.delete"
    | "UserRole.*"
    | "UserRole.create"
    | "UserRole.read"
    | "UserRole.update"
    | "UserRole.delete"
  )[];
}

export interface CreateGroupBodyDto {
  /** @minLength 1 */
  name: string;
}

export interface CreateGroupResponse {
  message: string;
  data: {
    id: number;
    name: string;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface FindAllGroupResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      name: string;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      _count: {
        entities: number;
      };
    }[];
  };
}

export interface FindOneGroupResponse {
  message: string;
  data: {
    id: number;
    name: string;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface UpdateGroupBodyDto {
  /** @minLength 1 */
  name: string;
}

export interface UpdateGroupResponse {
  message: string;
  data: {
    id: number;
    name: string;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface CreatePropertyBodyDto {
  group_id?: number | null;
  name: string;
  type: "RUKO" | "TANAH" | "GEDUNG" | "GUDANG" | "KANTOR" | "RUMAH" | "APARTEMEN" | "BILLBOARD" | "NEONBOX" | "PABRIK";
  address: string;
  city_code?: string | null;
  land_area: number | null;
  building_area: number | null;
  dimension: string;
  link_gmap?: string | null;
  lease_price_monthly: number | null;
  lease_price_yearly: number | null;
  sell_price: number | null;
  desc?: string | null;
  is_available: boolean;
  is_leased: boolean;
  other_info?: string | null;
}

export interface CreatePropertyResponse {
  message: string;
  data: {
    id: number;
    group_id: number | null;
    name: string;
    type:
      | "RUKO"
      | "TANAH"
      | "GEDUNG"
      | "GUDANG"
      | "KANTOR"
      | "RUMAH"
      | "APARTEMEN"
      | "BILLBOARD"
      | "NEONBOX"
      | "PABRIK";
    address: string;
    city_code: string | null;
    land_area: number;
    building_area: number;
    dimension: number;
    link_gmap: number | null;
    specific_info: string | null;
    lease_price_monthly: number;
    lease_price_yearly: number;
    sell_price: number;
    desc: string | null;
    /** @default true */
    is_available?: boolean;
    /** @default false */
    is_leased?: boolean;
    other_info: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface FindAllPropertyResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      group_id: number | null;
      name: string;
      type:
        | "RUKO"
        | "TANAH"
        | "GEDUNG"
        | "GUDANG"
        | "KANTOR"
        | "RUMAH"
        | "APARTEMEN"
        | "BILLBOARD"
        | "NEONBOX"
        | "PABRIK";
      address: string;
      city_code: string | null;
      land_area: number;
      building_area: number;
      dimension: number;
      link_gmap: number | null;
      specific_info: string | null;
      lease_price_monthly: number;
      lease_price_yearly: number;
      sell_price: number;
      desc: string | null;
      /** @default true */
      is_available?: boolean;
      /** @default false */
      is_leased?: boolean;
      other_info: string | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface ShowPropertyResponse {
  message: string;
  data: {
    id: number;
    group_id: number | null;
    name: string;
    type:
      | "RUKO"
      | "TANAH"
      | "GEDUNG"
      | "GUDANG"
      | "KANTOR"
      | "RUMAH"
      | "APARTEMEN"
      | "BILLBOARD"
      | "NEONBOX"
      | "PABRIK";
    address: string;
    city_code: string | null;
    land_area: number;
    building_area: number;
    dimension: number;
    link_gmap: number | null;
    specific_info: string | null;
    lease_price_monthly: number;
    lease_price_yearly: number;
    sell_price: number;
    desc: string | null;
    /** @default true */
    is_available?: boolean;
    /** @default false */
    is_leased?: boolean;
    other_info: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface UpdatePropertyBodyDto {
  group_id?: number | null;
  name: string;
  type: "RUKO" | "TANAH" | "GEDUNG" | "GUDANG" | "KANTOR" | "RUMAH" | "APARTEMEN" | "BILLBOARD" | "NEONBOX" | "PABRIK";
  address: string;
  city_code?: string | null;
  land_area: number | null;
  building_area: number | null;
  dimension: string;
  link_gmap?: string | null;
  lease_price_monthly: number | null;
  lease_price_yearly: number | null;
  sell_price: number | null;
  desc?: string | null;
  is_available: boolean;
  is_leased: boolean;
  other_info?: string | null;
}

export interface UpdatePropertyResponse {
  message: string;
  data: {
    id: number;
    group_id: number | null;
    name: string;
    type:
      | "RUKO"
      | "TANAH"
      | "GEDUNG"
      | "GUDANG"
      | "KANTOR"
      | "RUMAH"
      | "APARTEMEN"
      | "BILLBOARD"
      | "NEONBOX"
      | "PABRIK";
    address: string;
    city_code: string | null;
    land_area: number;
    building_area: number;
    dimension: number;
    link_gmap: number | null;
    specific_info: string | null;
    lease_price_monthly: number;
    lease_price_yearly: number;
    sell_price: number;
    desc: string | null;
    /** @default true */
    is_available?: boolean;
    /** @default false */
    is_leased?: boolean;
    other_info: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface DeletePropertyResponse {
  message: string;
  data: {
    id: number;
    group_id: number | null;
    name: string;
    type:
      | "RUKO"
      | "TANAH"
      | "GEDUNG"
      | "GUDANG"
      | "KANTOR"
      | "RUMAH"
      | "APARTEMEN"
      | "BILLBOARD"
      | "NEONBOX"
      | "PABRIK";
    address: string;
    city_code: string | null;
    land_area: number;
    building_area: number;
    dimension: number;
    link_gmap: number | null;
    specific_info: string | null;
    lease_price_monthly: number;
    lease_price_yearly: number;
    sell_price: number;
    desc: string | null;
    /** @default true */
    is_available?: boolean;
    /** @default false */
    is_leased?: boolean;
    other_info: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface ProvinseResponse {
  message: string;
  data: {
    code: string;
    name: string;
    latitude: string | null;
    longitude: string | null;
  }[];
}

export interface CityResponse {
  message: string;
  data: {
    code: string;
    name: string;
    latitude: string | null;
    longitude: string | null;
    province_code: string;
  }[];
}

export interface DistrictResponse {
  message: string;
  data: {
    code: string;
    name: string;
    latitude: string | null;
    longitude: string | null;
    city_code: string;
  }[];
}

export interface SubDistrictResponse {
  message: string;
  data: {
    code: string;
    name: string;
    latitude: string | null;
    longitude: string | null;
    district_code: string;
  }[];
}

export interface CreateEntityBodyDto {
  categories: string[];
  /** @minLength 1 */
  type: string;
  /** @minLength 3 */
  name: string;
  phone?: string | null;
  /** @format email */
  email?: string | null;
  nib?: string | null;
  npwp?: string | null;
  address?: string | null;
  /** @minLength 1 */
  contact_name: string;
  /** @minLength 1 */
  contact_phone: string;
  /** @minLength 1 */
  city_code: string;
  group_id?: number | null;
}

export interface CreateEntityResponse {
  message: string;
  data: {
    id: number;
    /** @minLength 1 */
    type: string;
    /** @minLength 3 */
    name: string;
    phone?: string;
    /** @format email */
    email?: string;
    nib?: string | null;
    npwp?: string | null;
    address?: string;
    /** @minLength 1 */
    contact_name: string;
    /** @minLength 1 */
    contact_phone: string;
    /** @minLength 1 */
    city_code: string;
    group_id?: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    categories: string[];
  };
}

export interface FindAllEntityResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      /** @minLength 1 */
      type: string;
      /** @minLength 3 */
      name: string;
      phone?: string;
      /** @format email */
      email?: string;
      nib?: string | null;
      npwp?: string | null;
      address?: string;
      /** @minLength 1 */
      contact_name: string;
      /** @minLength 1 */
      contact_phone: string;
      /** @minLength 1 */
      city_code: string;
      group_id?: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      categories: string[];
      city: {
        name: string;
      } | null;
    }[];
  };
}

export interface ShowEntityResponse {
  message: string;
  data: {
    id: number;
    /** @minLength 1 */
    type: string;
    /** @minLength 3 */
    name: string;
    phone?: string;
    /** @format email */
    email?: string;
    nib?: string | null;
    npwp?: string | null;
    address?: string;
    /** @minLength 1 */
    contact_name: string;
    /** @minLength 1 */
    contact_phone: string;
    /** @minLength 1 */
    city_code: string;
    group_id?: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    categories: string[];
    city: {
      code: string;
      name: string;
      latitude: string | null;
      longitude: string | null;
      province_code: string;
    };
    group?: {
      id: number;
      name: string;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    };
  };
}

export interface UpdateEntityBodyDto {
  categories: string[];
  /** @minLength 1 */
  type: string;
  /** @minLength 3 */
  name: string;
  phone?: string | null;
  /** @format email */
  email?: string | null;
  nib?: string | null;
  npwp?: string | null;
  address?: string | null;
  /** @minLength 1 */
  contact_name: string;
  /** @minLength 1 */
  contact_phone: string;
  /** @minLength 1 */
  city_code: string;
  group_id?: number | null;
}

export interface CreateEntityCategoryBodyDto {
  /** @minLength 1 */
  name: string;
}

export interface CreateEntityCategoryResponse {
  message: string;
  data: {
    id: number;
    label: string;
    value: string;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface CreateNopBodyDto {
  /** @minLength 1 */
  nop: string;
  /** @minLength 1 */
  location?: string | null;
  land_area?: number | null;
  taxpayer_id?: number | null;
  building_area?: number | null;
  subdistrict_code?: string | null;
}

export interface CreateNopResponse {
  message: string;
  data: {
    id: number;
    nop: string;
    taxpayer_id: number | null;
    location: string | null;
    subdistrict_code: string | null;
    land_area: number | null;
    building_area: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface FindAllNopResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      nop: string;
      taxpayer_id: number | null;
      location: string | null;
      subdistrict_code: string | null;
      land_area: number | null;
      building_area: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      taxpayer: {
        /** @minLength 3 */
        name: string;
      };
      subdistrict: {
        name: string;
        district: {
          name: string;
          city: {
            name: string;
          };
        };
      };
      certificate_nops: {
        certificate: {
          type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
          no: string;
          location_name: string | null;
        };
      }[];
    }[];
  };
}

export interface ShowNopResponse {
  message: string;
  data: {
    id: number;
    nop: string;
    taxpayer_id: number | null;
    location: string | null;
    subdistrict_code: string | null;
    land_area: number | null;
    building_area: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface UpdateNopBodyDto {
  /** @minLength 1 */
  nop: string;
  /** @minLength 1 */
  location?: string | null;
  land_area?: number | null;
  taxpayer_id?: number | null;
  building_area?: number | null;
  subdistrict_code?: string | null;
}

export interface CreatePbbBodyDto {
  /**
   * @minLength 4
   * @maxLength 4
   */
  year: string;
  nop_id: number;
  land_area: number | null;
  building_area: number | null;
  njop_land: number | null;
  njop_building: number | null;
  /** @default 0 */
  njop_no_tax?: number | null;
  taxpayer_id: number;
  /** @default 0 */
  stimulus?: number | null;
  multiplier: number | null;
  /** @default 0 */
  payment_fee?: number | null;
  total_payment?: number | null;
  payment_method?: string | null;
  /** @format date-time */
  payment_date?: string | null;
}

export interface CreatePbbResponse {
  message: string;
  data: {
    id: number;
    nop_id: number;
    year: string;
    land_area: number;
    building_area: number;
    njop_land: number;
    njop_building: number;
    njop_no_tax: number;
    taxpayer_id: number;
    stimulus: number;
    multiplier: number;
    payment_fee: number;
    total_payment: number | null;
    payment_method: string | null;
    /** @format date-time */
    payment_date: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface FindAllPbbResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      nop_id: number;
      year: string;
      land_area: number;
      building_area: number;
      njop_land: number;
      njop_building: number;
      njop_no_tax: number;
      taxpayer_id: number;
      stimulus: number;
      multiplier: number;
      payment_fee: number;
      total_payment: number | null;
      payment_method: string | null;
      /** @format date-time */
      payment_date: string | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      nop: {
        nop: string;
      };
    }[];
  };
}

export interface ShowPbbResponse {
  message: string;
  data: {
    id: number;
    nop_id: number;
    year: string;
    land_area: number;
    building_area: number;
    njop_land: number;
    njop_building: number;
    njop_no_tax: number;
    taxpayer_id: number;
    stimulus: number;
    multiplier: number;
    payment_fee: number;
    total_payment: number | null;
    payment_method: string | null;
    /** @format date-time */
    payment_date: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    nop: {
      id: number;
      nop: string;
      taxpayer_id: number | null;
      location: string | null;
      subdistrict_code: string | null;
      land_area: number | null;
      building_area: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    };
  };
}

export interface UpdatePbbBodyDto {
  /**
   * @minLength 4
   * @maxLength 4
   */
  year: string;
  nop_id: number;
  land_area: number | null;
  building_area: number | null;
  njop_land: number | null;
  njop_building: number | null;
  /** @default 0 */
  njop_no_tax?: number | null;
  taxpayer_id: number;
  /** @default 0 */
  stimulus?: number | null;
  multiplier: number | null;
  /** @default 0 */
  payment_fee?: number | null;
  total_payment?: number | null;
  payment_method?: string | null;
  /** @format date-time */
  payment_date?: string | null;
}

export interface UpdatePbbResponse {
  message: string;
  data: {
    id: number;
    nop_id: number;
    year: string;
    land_area: number;
    building_area: number;
    njop_land: number;
    njop_building: number;
    njop_no_tax: number;
    taxpayer_id: number;
    stimulus: number;
    multiplier: number;
    payment_fee: number;
    total_payment: number | null;
    payment_method: string | null;
    /** @format date-time */
    payment_date: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface DeletePbbResponse {
  message: string;
  data: {
    id: number;
    nop_id: number;
    year: string;
    land_area: number;
    building_area: number;
    njop_land: number;
    njop_building: number;
    njop_no_tax: number;
    taxpayer_id: number;
    stimulus: number;
    multiplier: number;
    payment_fee: number;
    total_payment: number | null;
    payment_method: string | null;
    /** @format date-time */
    payment_date: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface CreateCrmBodyDto {
  property_id: number | null;
  /** @format date-time */
  date: string | null;
  prospect_client_id?: number | null;
  prospect_desc: string;
  pic_client_id?: number | null;
}

export interface CreateCrmResponse {
  message: string;
  data: {
    id: number;
    property_id: number;
    /** @format date-time */
    date: string;
    prospect_client_id: number | null;
    prospect_desc: string;
    pic_client_id: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface FindAllCrmResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      property_id: number;
      /** @format date-time */
      date: string;
      prospect_client_id: number | null;
      prospect_desc: string;
      pic_client_id: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      prospect_client: {
        name: string;
      };
      property: {
        type: string;
        name: string;
        specific_info: string | null;
        address: string;
        city: {
          name: string;
        };
      };
    }[];
  };
}

export interface ShowCrmResponse {
  message: string;
  data: {
    id: number;
    property_id: number;
    /** @format date-time */
    date: string;
    prospect_client_id: number | null;
    prospect_desc: string;
    pic_client_id: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface UpdateCrmBodyDto {
  property_id: number | null;
  /** @format date-time */
  date: string | null;
  prospect_client_id?: number | null;
  prospect_desc: string;
  pic_client_id?: number | null;
}

export interface CreateCertificateBodyDto {
  property_id?: number | null;
  behalf_of_id: number | null;
  group_id?: number | null;
  type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
  no: string;
  subdistrict_code?: string | null;
  address?: string | null;
  location_name?: string | null;
  original_cert?: string | null;
  original_doc?: string | null;
  copy_archive?: string | null;
  no_copy_archive?: string | null;
  ownership_status?: "OWNER" | "MILIK_SENDIRI" | "PINJAM_NAMA" | "KUASA_JUAL" | "LAINNYA" | null;
  owner_id?: number | null;
  functional?: string | null;
  land_area: number | null;
  ajb_notary_id: number | null;
  ajb_no: string;
  /** @format date-time */
  ajb_date: string | null;
  ajb_total: number | null;
  /** @format date-time */
  publish_date: string | null;
  /** @format date-time */
  expired_date: string | null;
  other_info?: string | null;
}

export interface CreateCertificateResponse {
  message: string;
  data: {
    id: number;
    property_id: number;
    behalf_of_id: number;
    group_id: number;
    type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
    no: string;
    subdistrict_code: string | null;
    address: string | null;
    location_name: string | null;
    original_cert: string | null;
    original_doc: string | null;
    copy_archive: string | null;
    no_copy_archive: string | null;
    ownership_status: "OWNER" | "MILIK_SENDIRI" | "PINJAM_NAMA" | "KUASA_JUAL" | "LAINNYA" | null;
    owner_id: number | null;
    functional: number | null;
    land_area: number;
    ajb_notary_id: number;
    ajb_no: string;
    /** @format date-time */
    ajb_date: string;
    ajb_total: number;
    /** @format date-time */
    publish_date: string;
    /** @format date-time */
    expired_date: string;
    other_info: string | null;
    documents: string | null;
    document_activities: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface FindAllCertificateResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      property_id: number;
      behalf_of_id: number;
      group_id: number;
      type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
      no: string;
      subdistrict_code: string | null;
      address: string | null;
      location_name: string | null;
      original_cert: string | null;
      original_doc: string | null;
      copy_archive: string | null;
      no_copy_archive: string | null;
      ownership_status: "OWNER" | "MILIK_SENDIRI" | "PINJAM_NAMA" | "KUASA_JUAL" | "LAINNYA" | null;
      owner_id: number | null;
      functional: number | null;
      land_area: number;
      ajb_notary_id: number;
      ajb_no: string;
      /** @format date-time */
      ajb_date: string;
      ajb_total: number;
      /** @format date-time */
      publish_date: string;
      /** @format date-time */
      expired_date: string;
      other_info: string | null;
      documents: string | null;
      document_activities: string | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface ShowCertificateResponse {
  message: string;
  data: {
    id: number;
    property_id: number;
    behalf_of_id: number;
    group_id: number;
    type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
    no: string;
    subdistrict_code: string | null;
    address: string | null;
    location_name: string | null;
    original_cert: string | null;
    original_doc: string | null;
    copy_archive: string | null;
    no_copy_archive: string | null;
    ownership_status: "OWNER" | "MILIK_SENDIRI" | "PINJAM_NAMA" | "KUASA_JUAL" | "LAINNYA" | null;
    owner_id: number | null;
    functional: number | null;
    land_area: number;
    ajb_notary_id: number;
    ajb_no: string;
    /** @format date-time */
    ajb_date: string;
    ajb_total: number;
    /** @format date-time */
    publish_date: string;
    /** @format date-time */
    expired_date: string;
    other_info: string | null;
    documents: string | null;
    document_activities: string | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface UpdateCertificateBodyDto {
  property_id?: number | null;
  behalf_of_id: number | null;
  group_id?: number | null;
  type: "SHM" | "SHGB" | "SHMSRS" | "LAINNYA";
  no: string;
  subdistrict_code?: string | null;
  address?: string | null;
  location_name?: string | null;
  original_cert?: string | null;
  original_doc?: string | null;
  copy_archive?: string | null;
  no_copy_archive?: string | null;
  ownership_status?: "OWNER" | "MILIK_SENDIRI" | "PINJAM_NAMA" | "KUASA_JUAL" | "LAINNYA" | null;
  owner_id?: number | null;
  functional?: string | null;
  land_area: number | null;
  ajb_notary_id: number | null;
  ajb_no: string;
  /** @format date-time */
  ajb_date: string | null;
  ajb_total: number | null;
  /** @format date-time */
  publish_date: string | null;
  /** @format date-time */
  expired_date: string | null;
  other_info?: string | null;
}

export interface UploadMediaResponse {
  message: string;
  data: {
    id: string;
  };
}

export interface RenameMediaBodyDto {
  id: number | null;
  /** @minLength 1 */
  title: string;
}

export interface UpdateMediaResponse {
  message: string;
  data: {
    id: number;
    directory: string;
    title: string;
    filename: string;
    extension: string;
    mime_type: string;
    size: number;
    tags: "ATTACHMENT"[];
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

export interface FindAllMediaResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      url: string;
      uploadedBy: {
        name: string;
      };
    }[];
  };
}

export interface DeleteMediaBodyDto {
  id: number | null;
  mediable_type: "entity" | "property" | "certificate" | "pbb" | "legal";
}

export interface CreateLegalBodyDto {
  type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
  no: string;
  /** @format date-time */
  date: string | null;
  title: string;
  detail?: string | null;
  notary_id?: number | null;
  storage_cabinet?: string | null;
  storage_rax?: string | null;
  storage_row?: string | null;
  storage_map?: string | null;
  legalization_no?: string | null;
  /** @format date-time */
  legalization_date?: string | null;
  parties?: {
    entity_id: number | null;
    type?: "FIRST_PARTY" | "SECOND_PARTY" | null;
  }[];
  witnesses?: {
    entity_id: number | null;
  }[];
}

export interface CreateLegalResponse {
  message: string;
  data: {
    id: number;
    type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
    title: string;
    no: string;
    /** @format date-time */
    date: string;
    legalization_no: string | null;
    /** @format date-time */
    legalization_date: string | null;
    detail: string | null;
    storage_cabinet: string | null;
    storage_rax: string | null;
    storage_row: string | null;
    storage_map: string | null;
    notary_id: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface FindAllLegalResponse {
  message: string;
  data: {
    /** @default 10 */
    limit?: number;
    /** @default 1 */
    page?: number;
    /** @default 1 */
    count?: number;
    hasNextPage: boolean;
    result: {
      id: number;
      type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
      title: string;
      no: string;
      /** @format date-time */
      date: string;
      legalization_no: string | null;
      /** @format date-time */
      legalization_date: string | null;
      detail: string | null;
      storage_cabinet: string | null;
      storage_rax: string | null;
      storage_row: string | null;
      storage_map: string | null;
      notary_id: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface ShowLegalResponse {
  message: string;
  data: {
    id: number;
    type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
    title: string;
    no: string;
    /** @format date-time */
    date: string;
    legalization_no: string | null;
    /** @format date-time */
    legalization_date: string | null;
    detail: string | null;
    storage_cabinet: string | null;
    storage_rax: string | null;
    storage_row: string | null;
    storage_map: string | null;
    notary_id: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
    notary: {
      id: number;
      /** @minLength 1 */
      type: string;
      /** @minLength 3 */
      name: string;
      phone?: string;
      /** @format email */
      email?: string;
      nib?: string | null;
      npwp?: string | null;
      address?: string;
      /** @minLength 1 */
      contact_name: string;
      /** @minLength 1 */
      contact_phone: string;
      /** @minLength 1 */
      city_code: string;
      group_id?: number | null;
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
      categories: string[];
    };
    parties: {
      id: number;
      legal_id: number;
      entity_id: number;
      type: "FIRST_PARTY" | "SECOND_PARTY" | null;
    }[];
    witnesses:
      | {
          id: number;
          legal_id: number;
          entity_id: number;
          type:
            | "NOTARIIL"
            | "BAWAH_TANGAN"
            | "BAWAH_TANGAN_LEGALISASI"
            | "BAWAH_TANGAN_WAARMERKING"
            | "DRAFT_BAWAH_TANGAN";
        }[]
      | null;
    attachments: {
      id: number;
      directory: string;
      title: string;
      filename: string;
      extension: string;
      mime_type: string;
      size: number;
      tags: "ATTACHMENT"[];
      /** @format date-time */
      created_at: string;
      /** @format date-time */
      updated_at: string;
      /** @format date-time */
      deleted_at: string | null;
    }[];
  };
}

export interface UpdateLegalBodyDto {
  type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
  no: string;
  /** @format date-time */
  date: string | null;
  title: string;
  detail?: string | null;
  notary_id?: number | null;
  storage_cabinet?: string | null;
  storage_rax?: string | null;
  storage_row?: string | null;
  storage_map?: string | null;
  legalization_no?: string | null;
  /** @format date-time */
  legalization_date?: string | null;
  parties?: {
    entity_id: number | null;
    type?: "FIRST_PARTY" | "SECOND_PARTY" | null;
  }[];
  witnesses?: {
    entity_id: number | null;
  }[];
}

export interface RemoveLegalLesponse {
  message: string;
  data: {
    id: number;
    type: "NOTARIIL" | "BAWAH_TANGAN" | "BAWAH_TANGAN_LEGALISASI" | "BAWAH_TANGAN_WAARMERKING" | "DRAFT_BAWAH_TANGAN";
    title: string;
    no: string;
    /** @format date-time */
    date: string;
    legalization_no: string | null;
    /** @format date-time */
    legalization_date: string | null;
    detail: string | null;
    storage_cabinet: string | null;
    storage_rax: string | null;
    storage_row: string | null;
    storage_map: string | null;
    notary_id: number | null;
    /** @format date-time */
    created_at: string;
    /** @format date-time */
    updated_at: string;
    /** @format date-time */
    deleted_at: string | null;
  };
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Landlord DOCS
 * @version 0.1.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     */
    authControllerLogin: (data: LoginBodyDto, params: RequestParams = {}) =>
      this.request<SchemaHolderClass, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserControllerProfile
     * @request GET:/user/profile
     * @secure
     */
    userControllerProfile: (params: RequestParams = {}) =>
      this.request<OneUserResponse, any>({
        path: `/user/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerAbility
     * @request GET:/user/ability
     * @secure
     */
    userControllerAbility: (params: RequestParams = {}) =>
      this.request<AbilityResponse, any>({
        path: `/user/ability`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerCreate
     * @request POST:/user
     * @secure
     */
    userControllerCreate: (data: CreateUserBodyDto, params: RequestParams = {}) =>
      this.request<OneUserResponse, any>({
        path: `/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerFindAll
     * @request GET:/user
     * @secure
     */
    userControllerFindAll: (
      query?: {
        search?: string;
        /** @default "username" */
        orderBy?: "name" | "created_at" | "username" | "email";
        /** @default "asc" */
        orderDirection?: "asc" | "desc";
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllResponse, any>({
        path: `/user`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerFindOne
     * @request GET:/user/{id}
     * @secure
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<OneUserResponse, any>({
        path: `/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerUpdate
     * @request PATCH:/user/{id}
     * @secure
     */
    userControllerUpdate: (id: string, data: UpdateUserBodyDto, params: RequestParams = {}) =>
      this.request<OneUserResponse, any>({
        path: `/user/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerRemove
     * @request DELETE:/user/{id}
     * @secure
     */
    userControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<DeleteUserResponse, any>({
        path: `/user/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerRole
     * @request GET:/user/option/role
     * @secure
     */
    userControllerRole: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/user/option/role`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  role = {
    /**
     * No description
     *
     * @tags role
     * @name RoleControllerCreate
     * @request POST:/role
     * @secure
     */
    roleControllerCreate: (data: CreateRoleBodyDto, params: RequestParams = {}) =>
      this.request<OneRoleResponse, any>({
        path: `/role`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role
     * @name RoleControllerFindAll
     * @request GET:/role
     * @secure
     */
    roleControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "name" | "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllRoleResponse, any>({
        path: `/role`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role
     * @name RoleControllerAllPermission
     * @request GET:/role/permission
     * @secure
     */
    roleControllerAllPermission: (params: RequestParams = {}) =>
      this.request<AllPermissionResponse, any>({
        path: `/role/permission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role
     * @name RoleControllerFindOne
     * @request GET:/role/{id}
     * @secure
     */
    roleControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<OneRoleResponse, any>({
        path: `/role/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role
     * @name RoleControllerUpdate
     * @request PATCH:/role/{id}
     * @secure
     */
    roleControllerUpdate: (id: string, data: UpdateRoleBodyDto, params: RequestParams = {}) =>
      this.request<OneRoleResponse, any>({
        path: `/role/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags role
     * @name RoleControllerRemove
     * @request DELETE:/role/{id}
     * @secure
     */
    roleControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<OneRoleResponse, any>({
        path: `/role/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  group = {
    /**
     * No description
     *
     * @name GroupControllerCreate
     * @request POST:/group
     * @secure
     */
    groupControllerCreate: (data: CreateGroupBodyDto, params: RequestParams = {}) =>
      this.request<CreateGroupResponse, any>({
        path: `/group`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GroupControllerFindAll
     * @request GET:/group
     * @secure
     */
    groupControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "name" | "created_at" | "entities._count";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        id?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllGroupResponse, any>({
        path: `/group`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GroupControllerOption
     * @request GET:/group/option
     * @secure
     */
    groupControllerOption: (params: RequestParams = {}) =>
      this.request<unknown, any>({
        path: `/group/option`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @name GroupControllerFindOne
     * @request GET:/group/{id}
     * @secure
     */
    groupControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<FindOneGroupResponse, any>({
        path: `/group/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GroupControllerUpdate
     * @request PATCH:/group/{id}
     * @secure
     */
    groupControllerUpdate: (id: string, data: UpdateGroupBodyDto, params: RequestParams = {}) =>
      this.request<UpdateGroupResponse, any>({
        path: `/group/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GroupControllerRemove
     * @request DELETE:/group/{id}
     * @secure
     */
    groupControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<unknown, any>({
        path: `/group/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  property = {
    /**
     * No description
     *
     * @tags property
     * @name PropertyControllerCreate
     * @request POST:/property
     * @secure
     */
    propertyControllerCreate: (data: CreatePropertyBodyDto, params: RequestParams = {}) =>
      this.request<CreatePropertyResponse, any>({
        path: `/property`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags property
     * @name PropertyControllerFindAll
     * @request GET:/property
     * @secure
     */
    propertyControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "name" | "type" | "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        type?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllPropertyResponse, any>({
        path: `/property`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags property
     * @name PropertyControllerFindOne
     * @request GET:/property/{id}
     * @secure
     */
    propertyControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowPropertyResponse, any>({
        path: `/property/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags property
     * @name PropertyControllerUpdate
     * @request PATCH:/property/{id}
     * @secure
     */
    propertyControllerUpdate: (id: string, data: UpdatePropertyBodyDto, params: RequestParams = {}) =>
      this.request<UpdatePropertyResponse, any>({
        path: `/property/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags property
     * @name PropertyControllerRemove
     * @request DELETE:/property/{id}
     * @secure
     */
    propertyControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<DeletePropertyResponse, any>({
        path: `/property/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  indonesia = {
    /**
     * No description
     *
     * @tags indonesia region
     * @name IndonesiaControllerProvince
     * @request GET:/indonesia/province
     */
    indonesiaControllerProvince: (params: RequestParams = {}) =>
      this.request<ProvinseResponse, any>({
        path: `/indonesia/province`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indonesia region
     * @name IndonesiaControllerCity
     * @request GET:/indonesia/city
     */
    indonesiaControllerCity: (
      query?: {
        province_code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CityResponse, any>({
        path: `/indonesia/city`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indonesia region
     * @name IndonesiaControllerDistrict
     * @request GET:/indonesia/district
     */
    indonesiaControllerDistrict: (
      query?: {
        city_code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DistrictResponse, any>({
        path: `/indonesia/district`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indonesia region
     * @name IndonesiaControllerSubdistrict
     * @request GET:/indonesia/subdistrict
     */
    indonesiaControllerSubdistrict: (
      query?: {
        district_code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubDistrictResponse, any>({
        path: `/indonesia/subdistrict`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  entity = {
    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerCreate
     * @request POST:/entity
     * @secure
     */
    entityControllerCreate: (data: CreateEntityBodyDto, params: RequestParams = {}) =>
      this.request<CreateEntityResponse, any>({
        path: `/entity`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerFindAll
     * @request GET:/entity
     * @secure
     */
    entityControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "name" | "email" | "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        type?: any[];
        category?: any[];
        group_id?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllEntityResponse, any>({
        path: `/entity`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerFindOne
     * @request GET:/entity/{id}
     * @secure
     */
    entityControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowEntityResponse, any>({
        path: `/entity/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerUpdate
     * @request PATCH:/entity/{id}
     * @secure
     */
    entityControllerUpdate: (id: string, data: UpdateEntityBodyDto, params: RequestParams = {}) =>
      this.request<CreateEntityResponse, any>({
        path: `/entity/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerRemove
     * @request DELETE:/entity/{id}
     * @secure
     */
    entityControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<ShowEntityResponse, any>({
        path: `/entity/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerCategory
     * @request GET:/entity/option/category
     * @secure
     */
    entityControllerCategory: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/entity/option/category`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerType
     * @request GET:/entity/option/type
     * @secure
     */
    entityControllerType: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/entity/option/type`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerGroup
     * @request GET:/entity/option/group
     * @secure
     */
    entityControllerGroup: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/entity/option/group`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags entity
     * @name EntityControllerCreateCategory
     * @request POST:/entity/category
     * @secure
     */
    entityControllerCreateCategory: (data: CreateEntityCategoryBodyDto, params: RequestParams = {}) =>
      this.request<CreateEntityCategoryResponse, any>({
        path: `/entity/category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  nop = {
    /**
     * No description
     *
     * @tags nop
     * @name NopControllerCreate
     * @request POST:/nop
     * @secure
     */
    nopControllerCreate: (data: CreateNopBodyDto, params: RequestParams = {}) =>
      this.request<CreateNopResponse, any>({
        path: `/nop`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerFindAll
     * @request GET:/nop
     * @secure
     */
    nopControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?:
          | "id"
          | "nop"
          | "created_at"
          | "taxpayer.name"
          | "location"
          | "subdistrict.name"
          | "subdistrict.district.name"
          | "subdistrict.district.city.name"
          | "land_area"
          | "building_area";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        taxpayer_id?: any[];
        subdistrict_code?: any[];
        city_code?: any[];
        has_certificate?: number | null;
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllNopResponse, any>({
        path: `/nop`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerFindOne
     * @request GET:/nop/{id}
     * @secure
     */
    nopControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowNopResponse, any>({
        path: `/nop/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerUpdate
     * @request PATCH:/nop/{id}
     * @secure
     */
    nopControllerUpdate: (id: string, data: UpdateNopBodyDto, params: RequestParams = {}) =>
      this.request<ShowNopResponse, any>({
        path: `/nop/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerRemove
     * @request DELETE:/nop/{id}
     * @secure
     */
    nopControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<ShowNopResponse, any>({
        path: `/nop/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerTaxpayerOption
     * @request GET:/nop/option/taxpayer
     * @secure
     */
    nopControllerTaxpayerOption: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/nop/option/taxpayer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerSubdistrictOption
     * @request GET:/nop/option/subdistrict
     * @secure
     */
    nopControllerSubdistrictOption: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/nop/option/subdistrict`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerCityOption
     * @request GET:/nop/option/city
     * @secure
     */
    nopControllerCityOption: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/nop/option/city`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nop
     * @name NopControllerHasCertificateOption
     * @request GET:/nop/option/has-certificate
     * @secure
     */
    nopControllerHasCertificateOption: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/nop/option/has-certificate`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pbb = {
    /**
     * No description
     *
     * @tags pbb
     * @name PbbControllerCreate
     * @request POST:/pbb
     * @secure
     */
    pbbControllerCreate: (data: CreatePbbBodyDto, params: RequestParams = {}) =>
      this.request<CreatePbbResponse, any>({
        path: `/pbb`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pbb
     * @name PbbControllerFindAll
     * @request GET:/pbb
     * @secure
     */
    pbbControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "nop_id" | "year" | "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        year?: any[];
        nop_id?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllPbbResponse, any>({
        path: `/pbb`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pbb
     * @name PbbControllerFindOne
     * @request GET:/pbb/{id}
     * @secure
     */
    pbbControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowPbbResponse, any>({
        path: `/pbb/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pbb
     * @name PbbControllerUpdate
     * @request PATCH:/pbb/{id}
     * @secure
     */
    pbbControllerUpdate: (id: string, data: UpdatePbbBodyDto, params: RequestParams = {}) =>
      this.request<UpdatePbbResponse, any>({
        path: `/pbb/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pbb
     * @name PbbControllerRemove
     * @request DELETE:/pbb/{id}
     * @secure
     */
    pbbControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<DeletePbbResponse, any>({
        path: `/pbb/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  crm = {
    /**
     * No description
     *
     * @tags crm
     * @name CrmControllerCreate
     * @request POST:/crm
     * @secure
     */
    crmControllerCreate: (data: CreateCrmBodyDto, params: RequestParams = {}) =>
      this.request<CreateCrmResponse, any>({
        path: `/crm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags crm
     * @name CrmControllerFindAll
     * @request GET:/crm
     * @secure
     */
    crmControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        prospect_client_id?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllCrmResponse, any>({
        path: `/crm`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags crm
     * @name CrmControllerFindOne
     * @request GET:/crm/{id}
     * @secure
     */
    crmControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowCrmResponse, any>({
        path: `/crm/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags crm
     * @name CrmControllerUpdate
     * @request PATCH:/crm/{id}
     * @secure
     */
    crmControllerUpdate: (id: string, data: UpdateCrmBodyDto, params: RequestParams = {}) =>
      this.request<ShowCrmResponse, any>({
        path: `/crm/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags crm
     * @name CrmControllerRemove
     * @request DELETE:/crm/{id}
     * @secure
     */
    crmControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<ShowCrmResponse, any>({
        path: `/crm/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  certificate = {
    /**
     * No description
     *
     * @tags certificate
     * @name CertificateControllerCreate
     * @request POST:/certificate
     * @secure
     */
    certificateControllerCreate: (data: CreateCertificateBodyDto, params: RequestParams = {}) =>
      this.request<CreateCertificateResponse, any>({
        path: `/certificate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificate
     * @name CertificateControllerFindAll
     * @request GET:/certificate
     * @secure
     */
    certificateControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "created_at";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        type?: any[];
        status?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllCertificateResponse, any>({
        path: `/certificate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificate
     * @name CertificateControllerFindOne
     * @request GET:/certificate/{id}
     * @secure
     */
    certificateControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowCertificateResponse, any>({
        path: `/certificate/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificate
     * @name CertificateControllerUpdate
     * @request PATCH:/certificate/{id}
     * @secure
     */
    certificateControllerUpdate: (id: string, data: UpdateCertificateBodyDto, params: RequestParams = {}) =>
      this.request<CreateCertificateResponse, any>({
        path: `/certificate/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags certificate
     * @name CertificateControllerRemove
     * @request DELETE:/certificate/{id}
     * @secure
     */
    certificateControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<ShowCertificateResponse, any>({
        path: `/certificate/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerUpload
     * @request POST:/file/upload
     * @secure
     */
    fileControllerUpload: (
      data: {
        /** @format binary */
        file: File;
        mediable_type: "entity" | "property" | "certificate" | "pbb" | "legal";
        mediable_id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UploadMediaResponse, any>({
        path: `/file/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerStreamTmpFile
     * @request GET:/file/tmp/{filename}
     * @secure
     */
    fileControllerStreamTmpFile: (filename: string, params: RequestParams = {}) =>
      this.request<unknown, any>({
        path: `/file/tmp/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerRenameMedia
     * @request PATCH:/file/media
     * @secure
     */
    fileControllerRenameMedia: (data: RenameMediaBodyDto, params: RequestParams = {}) =>
      this.request<UpdateMediaResponse, any>({
        path: `/file/media`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerFindAllMedia
     * @request GET:/file/media
     * @secure
     */
    fileControllerFindAllMedia: (
      query?: {
        search?: string;
        /** @default "updated_at" */
        orderBy?: "filename" | "uploadedBy.name" | "updated_at" | "size";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        mediable_type?: "entity" | "property" | "certificate" | "pbb" | "legal";
        mediable_id?: number | null;
        /** @default ["ATTACHMENT"] */
        tags?: any[];
        type?: any[];
        modified?: any[];
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllMediaResponse, any>({
        path: `/file/media`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerDeleteMedia
     * @request DELETE:/file/media
     * @secure
     */
    fileControllerDeleteMedia: (data: DeleteMediaBodyDto, params: RequestParams = {}) =>
      this.request<unknown, any>({
        path: `/file/media`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerType
     * @request GET:/file/option/type
     * @secure
     */
    fileControllerType: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/file/option/type`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerModified
     * @request GET:/file/option/modified
     * @secure
     */
    fileControllerModified: (params: RequestParams = {}) =>
      this.request<OptionResponse, any>({
        path: `/file/option/modified`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags media and file
     * @name FileControllerResize
     * @request GET:/file/resize/{width}/*
     * @secure
     */
    fileControllerResize: (width: string, params: RequestParams = {}) =>
      this.request<unknown, any>({
        path: `/file/resize/${width}/*`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  legal = {
    /**
     * No description
     *
     * @tags legal
     * @name LegalControllerCreate
     * @request POST:/legal
     * @secure
     */
    legalControllerCreate: (data: CreateLegalBodyDto, params: RequestParams = {}) =>
      this.request<CreateLegalResponse, any>({
        path: `/legal`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal
     * @name LegalControllerFindAll
     * @request GET:/legal
     * @secure
     */
    legalControllerFindAll: (
      query?: {
        search?: string;
        /** @default "created_at" */
        orderBy?: "created_at" | "title" | "no" | "date" | "legalization_no" | "legalization_date";
        /** @default "desc" */
        orderDirection?: "asc" | "desc";
        limit?: number | null;
        page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindAllLegalResponse, any>({
        path: `/legal`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal
     * @name LegalControllerFindOne
     * @request GET:/legal/{id}
     * @secure
     */
    legalControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ShowLegalResponse, any>({
        path: `/legal/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal
     * @name LegalControllerUpdate
     * @request PATCH:/legal/{id}
     * @secure
     */
    legalControllerUpdate: (id: string, data: UpdateLegalBodyDto, params: RequestParams = {}) =>
      this.request<CreateLegalResponse, any>({
        path: `/legal/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags legal
     * @name LegalControllerRemove
     * @request DELETE:/legal/{id}
     * @secure
     */
    legalControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<RemoveLegalLesponse, any>({
        path: `/legal/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
