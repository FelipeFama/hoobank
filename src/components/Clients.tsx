import { clients } from "../constants";
import { box } from "../constants/boxes";

export default function Clients() {
  return (
    <section className={`${box.flexCenter} my-4`}>
      <article className={`${box.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <figure
            key={client.id}
            className={`flex-1 ${box.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <img
              src={client.logo}
              alt="client-logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </figure>
        ))}
      </article>
    </section>
  );
}
