import type { Supplier } from "../types/Supplier";

interface Props {
  suppliers: Supplier[];
  onDelete: (id: number) => void;
  onEdit: (supplier: Supplier) => void;
}

function SupplierTable({
  suppliers,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="bg-[#111827] rounded-lg border border-gray-700 overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-[#0f172a]">

          <tr>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Supplier Code
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Supplier Name
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Contact Person
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Phone
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Email
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              GST Number
            </th>

            <th className="text-left px-4 py-3 border-b border-gray-700">
              Address
            </th>

            <th className="text-center px-4 py-3 border-b border-gray-700">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {suppliers.length === 0 ? (

            <tr>

              <td
                colSpan={8}
                className="
                text-center
                py-8
                text-gray-400
                "
              >
                No Suppliers Found
              </td>

            </tr>

          ) : (

            suppliers.map(
              (supplier) => (

                <tr
                  key={supplier.supplierId}
                  className="
                  border-b
                  border-gray-800
                  hover:bg-gray-800
                  "
                >

                  <td className="px-4 py-3">
                    {supplier.supplierCode}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.supplierName}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.contactPerson}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.phone}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.email}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.gstNumber}
                  </td>

                  <td className="px-4 py-3">
                    {supplier.address}
                  </td>

                  <td className="px-4 py-3 text-center">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          onEdit(
                            supplier
                          )
                        }
                        className="
                        bg-green-600
                        hover:bg-green-700
                        px-3
                        py-1
                        rounded
                        text-white
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            supplier.supplierId
                          )
                        }
                        className="
                        bg-red-600
                        hover:bg-red-700
                        px-3
                        py-1
                        rounded
                        text-white
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              )
            )

          )}

        </tbody>

      </table>

    </div>
  );
}

export default SupplierTable;