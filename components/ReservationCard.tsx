import { Reservation } from "@/types";

type Props = {
  reservation: Reservation;
};
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toDateString();
};

const countDaysBetweenDates = (reservation: Reservation): number => {
  const startDate = new Date(reservation.start_date);
  const endDate = new Date(reservation.end_date);

  const difference =
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

  return Math.round(difference);
};

const ReservationCard = ({ reservation }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl transition duration-200 hover:scale-105">
      <div className="card-body">
        <p>
          <strong>Start Date:</strong> {formatDate(reservation.start_date)}
        </p>
        <p>
          <strong>End Date:</strong> {formatDate(reservation.end_date)}
        </p>
        <p>
          <strong>Days:</strong> {countDaysBetweenDates(reservation)}
        </p>
      </div>
    </div>
  );
};
export default ReservationCard;
