import CardRequestDetails from "@/components/Cards/CardRequestDetails";
import { cardRequests } from "@/constants";
import { CardRequestsProps } from "@/types";

const CardRequestDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const requestData = cardRequests.find((card) => card.id === Number(id));
  
  return (
    <main className="pageContainer !pb-20">
      <section className="pb-3">
        <h4 className="text-myBlack">Request Details</h4>
        <p className="text-myBlack py-2">
          Perform predetermined actions on card requests here.
        </p>
      </section>
      <CardRequestDetails data={requestData as CardRequestsProps} />
    </main>
  );
};

export default CardRequestDetailsPage;
