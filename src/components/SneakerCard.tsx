import { Link } from 'react-router-dom';

interface SneakerCardProps {
  id: number;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ id }) => {
  return (
    <article className="group cursor-pointer space-y-6">
      <Link to={`/catalog/${id}`}>
        <div className="bg-background group-hover:border-background mb-6 flex size-78 items-center justify-center rounded-md border-4 border-white p-2 transition-all">
          <img
            src={`/sneakers/sneaker-${id}.png`}
            alt=""
            className="select-none"
          />
        </div>
        <div className="space-y-2 px-2 font-medium">
          <p>Puma Running SX</p>
          <p className="text-secondary">10,000 ₽</p>
        </div>
      </Link>
    </article>
  );
};

export default SneakerCard;
