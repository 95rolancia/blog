import Image from 'next/image'

export default function Info() {
  return (
    <section className="flex items-center justify-center m-8">
      <Image
        src="/images/avatar.jpg"
        width={200}
        height={200}
        alt="avatar"
        className="border rounded-full mr-8"
      />

      <div>
        <h2 className="text-3xl font-bold mb-2">
          어렴풋, 모호한 것보다는 상세하고 명확하게.
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          ipsum nobis deleniti, similique fuga sit dolore repellat consequatur
          eius? Assumenda, consequuntur earum. Est harum laudantium incidunt
          amet exercitationem, similique tempore.
        </p>
      </div>
    </section>
  )
}
