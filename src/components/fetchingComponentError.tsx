async function generateError() {
  // to powoduje duze problemy jak bedzie reject
  // error boundary wyswietli
  // Cannot read properties of undefined (reading 'message')

  // disabling for production
  // await new Promise((_, reject) => setTimeout(reject, 3000));
  // return await new Promise((resolve) => setTimeout(resolve, 3000));

  return "Hi";
}

export default async function ErrorComponent() {
  const res = await generateError();
  if (!res) {
    throw new Error("dupa!!");
  }

  return <div className="w-32 bg-red-300">{JSON.stringify(res)}</div>;
}
