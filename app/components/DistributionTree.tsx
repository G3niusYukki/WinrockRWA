export interface ThirdLevelUser {
  id: number;
  name: string;
}

export interface SecondLevelUser {
  id: number;
  name: string;
  thirdLevel: ThirdLevelUser[];
}

export interface DistributionData {
  platform: string;
  secondLevel: SecondLevelUser[];
}

export default function DistributionTree({ data }: { data: DistributionData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{data.platform}</h2>
      <ul className="space-y-4">
        {data.secondLevel.map((second) => (
          <li key={second.id}>
            <p className="font-semibold">{second.name}</p>
            <ul className="pl-4 list-disc">
              {second.thirdLevel.map((third) => (
                <li key={third.id}>{third.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
