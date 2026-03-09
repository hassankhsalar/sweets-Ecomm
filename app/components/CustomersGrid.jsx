import getPrisma from '@/lib/prisma'
import Image from "next/image";

const ADMIN_PANEL_URL = 'http://localhost:3001'

export default async function CustomersGrid() {
  const prisma = await getPrisma() // Lazy load prisma
  
  const customers = await prisma.valuedCustomer.findMany({
    where: {
      isActive: true,
      deletedAt: false
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  if (!customers || customers.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-900">
          Our Valued Customers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              {customer.image ? (
                <img
                  src={`${ADMIN_PANEL_URL}${customer.image}`}
                  alt={`Customer ${customer.id}`}
                  width={180}
                  height={100}
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML += '<div class="w-[180px] h-[100px] bg-gray-200 flex items-center justify-center text-gray-500">Image Error</div>'
                  }}
                />
              ) : (
                <div className="w-[180px] h-[100px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}