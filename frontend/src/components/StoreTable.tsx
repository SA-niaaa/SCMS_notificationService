import type { StoreType } from "../types/Store";

interface Props {
  stores: StoreType[];
  onDelete: (id: number) => void;
  onEdit: (store: StoreType) => void;
}

function StoreTable({
  stores,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div
      className="
      bg-[#1f2937]
      border
      border-gray-700
      rounded-xl
      overflow-hidden
      shadow-lg
      "
    >
      <table className="w-full text-sm">

        <thead className="bg-[#111827]">
          <tr>

            <th className="px-4 py-3 text-left">
              Store Code
            </th>

            <th className="px-4 py-3 text-left">
              Store Name
            </th>

            <th className="px-4 py-3 text-left">
              Location
            </th>

            <th className="px-4 py-3 text-left">
              Store Type
            </th>

            <th className="px-4 py-3 text-left">
              Manager
            </th>

            <th className="px-4 py-3 text-left">
              Contact
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-center">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {stores.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="text-center py-8 text-gray-400"
              >
                No Stores Found
              </td>
            </tr>
          ) : (
            stores.map((store) => (
              <tr
                key={store.storeId}
                className="
                border-t
                border-gray-700
                hover:bg-gray-800
                "
              >

                <td className="px-4 py-3">
                  {store.storeCode}
                </td>

                <td className="px-4 py-3">
                  {store.storeName}
                </td>

                <td className="px-4 py-3">
                  {store.location}
                </td>

                <td className="px-4 py-3">
                  {store.storeType}
                </td>

                <td className="px-4 py-3">
                  {store.managerName}
                </td>

                <td className="px-4 py-3">
                  {store.contactNumber}
                </td>

                <td className="px-4 py-3">
                  {store.status}
                </td>

                <td className="px-4 py-3">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        onEdit(store)
                      }
                      className="
                      bg-green-600
                      hover:bg-green-700
                      px-3
                      py-1
                      rounded
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        onDelete(
                          store.storeId
                        )
                      }
                      className="
                      bg-red-600
                      hover:bg-red-700
                      px-3
                      py-1
                      rounded
                      "
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}

export default StoreTable;