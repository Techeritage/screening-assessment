import CreateProfileForm from "@/components/CreateProfileForm";

const CardProfileActionPage = async ({
  params,
}: {
  params: { action: string };
}) => {
  const { action } = await params;
  return (
    <main className="pageContainer !pb-20">
      <section className="pb-3">
        <h4 className="text-myBlack">
          {action === "create" ? "Create Profile" : "Edit Profile"}
        </h4>
        <p className="text-myBlack py-2">
          Fill in profile details and add card fee.
        </p>
      </section>
      <CreateProfileForm />
    </main>
  );
};

export default CardProfileActionPage;
