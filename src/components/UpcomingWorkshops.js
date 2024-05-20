import workshops from "@/json/workshops.json";

export default function UpcomingWorkshops() {
  return (
    <section>
      <h2>Upcoming Workshops</h2>
      {workshops.map((workshop) => {
        return (
          <div key={workshop._id}>
            <p>{workshop.date}</p>
            <p>{workshop.title}</p>
            <p>{workshop.workshop_type}</p>
            <p>{workshop.description}</p>
            <br />
          </div>
        );
      })}
    </section>
  );
}
