import RealTimeECG from '../src/components/RealTimeECG';

export default function Home() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>HeartLab AI</h1>
      <RealTimeECG />
    </div>
  );
}