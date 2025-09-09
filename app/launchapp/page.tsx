/* eslint-disable @next/next/no-img-element */
"use client";
import Pagination from "@/components/Pagination";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import axios from "@/config/axios";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { handleSearch } from "@/redux/slices/variables";
import { AuthFormValues } from "@/types/Forms";
import { capitalize } from "@/utils/Helpers";
import { toast } from "@/utils/Toast";
import { useQuery } from "@tanstack/react-query";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const axiosAuth = useAxiosAuth();
  const dispatch = useDispatch();
  const { order, take, pageNumber, search } = useSelector(
    (state: any) => state.variables
  );

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["generalProjects", order, pageNumber, take],
    queryFn: () =>
      axios.get(
        `/projects/general?order=${order}&pageNumber=${pageNumber}&take=${take}`
      ),
  });

  const {
    data: searchedData,
    isLoading: searching,
    error: searchError,
    isError: isSearchError,
  } = useQuery({
    queryKey: ["searchedProjects", search],
    queryFn: () => {
      if (search) {
        return axios.get(`/projects/search/${search}`);
      }
    },
  });

  const projectData = search
    ? searchedData?.data?.data
    : data?.data?.data?.projects?.data;
  const projectCount = search
    ? searchedData?.data?.count
    : data?.data?.data?.totalCount;

  const errorCode = search ? searchError?.message : error?.message;

  if (isError) {
    if (errorCode === "Request failed with status code 401") {
      router.replace("/signIn");
      toast({ dispatch, message: "Unauthorized Please Login" });
    } else {
      toast({ dispatch, message: "Something went wrong!!!" });
    }
  }

  const formik = useFormik<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: AuthFormValues): void {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const gotoViewProject = (projectId: string) => {
    router.push(`/launchApp/${projectId}`);
  };

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (e: any) => {
    const term = e.target.value;
    dispatch(handleSearch(term));
  };

  const tabStyle = (tab: number) => {
    return `${
      activeTab === tab ? "bg-customGray " : ""
    } whitespace-nowrap p-[10px] duration-150 cursor-pointer  rounded-lg h-[28px] flex justify-center items-center text-xs md:text-base`;
  };

  const renderProjects = () => {
    return projectData?.map((p: any) => (
      <tr key={p.id}>
        <td>
          <div className="flex justify-start items-center gap-3 ">
            <div className="min-h-8 min-w-8 h-8 w-8 rounded-full bg-white overflow-hidden">
              <img
                src={p.projectImageUrl}
                alt={p.name}
                height={300}
                width={300}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="block">{capitalize(p.name)}</span>
          </div>
        </td>
        <td>{p.network}</td>
        <td>{p.wallet}</td>
        <td>{p.totalAmountGenerated || 0}</td>
        <td>{p.totalToken || 0}</td>
        <td>{p.totalTokenCirculation || 0}</td>
        <td>{p.percentageCirculation || 0}%</td>
        <td>{p.extension}</td>
        <td>{p.email}</td>
        <td>
          <Button title="View project" fn={() => gotoViewProject(p.id)} />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Header />
      <section className="md:min-h-screen relative">
        <div className="absolute top-[15%] -right-[15%]  -z-0 hidden md:block ">
          <img
            src="/images/big_glow.svg"
            height={500}
            width={500}
            alt="bg-glow"
            className="block"
          />
        </div>
        <div className="section-container ">
          <div className=" md:flex md:justify-between md:pl-4">
            <div className="mt-10 md:mt-0 md:flex-1 md:flex md:flex-col justify-center items-start">
              <h2 className="font-sfBold w-3/4 mx-auto md:text-3xl lg:text-4xl 2xl:text-6xl text-center md:mx-0 md:text-start">
                Enhance Liquidity Effortlessly with L2 Network Integration
              </h2>
              <p className="text-sm mt-3 mx-auto text-center w-4/5 md:text-base md:mt-4 md:mx-0 md:text-start">
                Unlock Seamless Liquidity Boosts with our L2 Integration Solution.
              </p>
              <p className="text-base mt-3 font-semibold text-primary mx-auto text-center w-4/5 md:text-base md:mt-4 md:mx-0 md:text-start">
                Enabled Networks :{" "}
                <span className="text-white font-sfMEd text-lg ">
                  Mainnet, Base, Arbitrum, Optimism
                </span>
              </p>
            </div>

            <div className="flex-1">
              <div className="w-10/12 max-w-[525px] 2xl:max-w-[600px] md:wfull md:p-6 mx-auto mt-10 md:mt-0">
                <img
                  src="/images/block_chain.png"
                  alt="X Logo"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-10 md:justify-between gap-3">
              <div className="flex gap-1 ">
                <div onClick={() => handleActiveTab(0)} className={tabStyle(0)}>
                  All
                </div>
                <div onClick={() => handleActiveTab(1)} className={tabStyle(1)}>
                  Pending Contributions
                </div>
                <div onClick={() => handleActiveTab(2)} className={tabStyle(2)}>
                  Completed contributions
                </div>
              </div>

              <div className="flex flex-col mt-2 relative md:mb-0 md:flex-1 md:max-w-[325px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-primaryTransparent placeholder:text-sm pl-10 mt-0"
                  onChange={handleChange}
                />
                <BiSearch size={24} className="absolute top-3 left-3" />
              </div>
            </div>

            {!data && isLoading ? (
              <Loading />
            ) : data && !projectCount ? (
              <div className="my-16 flex flex-col items-center">
                <h4 className="text-center md:text-xl mb-6">
                  Oops you don&apos;t have any project
                </h4>
              </div>
            ) : (
              <div className="border border-primaryTransparent rounded-lg py-2  ">
                <h3 className="p-5 pt-2"> Project ({projectCount || 0})</h3>
                <div className="border-t  border-primaryTransparent py-2 overflow-x-auto">
                  <table>
                    <thead className="border-b border-primaryTransparent ">
                      <tr>
                        <td className="">Name</td>
                        <td>Network</td>
                        <td>Wallet Address</td>
                        <td>Total Amount Generated</td>
                        <td>Total Token</td>
                        <td>Total Circulation</td>
                        <td>Percentage Circulation</td>
                        <td>Extension</td>
                        <td>Email</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {renderProjects()}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {projectData?.length > 0 && (
              <Pagination totalCount={projectCount} />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
