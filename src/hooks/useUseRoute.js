import { useRouter } from "next/navigation";

const useUseRoute = () => {
  const router = useRouter();

  const handlePush = (route) => router.push(route);
  const handleBack = () => router.back();

  return {
    router,
    handlePush,
    handleBack,
  };
};

export default useUseRoute;
