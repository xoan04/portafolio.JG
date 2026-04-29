/** Empresa / cliente asociado a un proyecto (`companyId` en `Project`). */
export interface Company {
  id: string;
  name: string;
}

export const companies: Company[] = [
  { id: "1", name: "Activos por Colombia" },
  { id: "2", name: "FAW Autos Morarci" },
  { id: "3", name: "Vértice Consulting" },
  { id: "4", name: "Océano Scuba" },
  { id: "5", name: "Actibid" },
  { id: "6", name: "Autoxpert" },
  { id: "8", name: "Macro Partes" },
  { id: "9", name: "American Visa" },
  { id: "12", name: "Foqqus" },
  { id: "15", name: "Yakka Sport" },
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
