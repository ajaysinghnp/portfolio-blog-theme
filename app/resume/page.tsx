import Timeline from "@/components/timeline";

// pages/index.tsx
const ResumePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Timeline</h1>
      </header>
      <Timeline />
    </div>
  );
};

export default ResumePage;
