import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import AnalyticsChart from "./AnalyticsChart";

const DashboardRight = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={62} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={62} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={62} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={62} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable title="Latest Posts" limit={5} />
    </div>
  );
};

export default DashboardRight;
