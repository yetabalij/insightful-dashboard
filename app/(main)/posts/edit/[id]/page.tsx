"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import posts from "@/data/post";
import Sidebar from "@/components/Sidebar";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const post = posts.find((post) => post.id === params.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 bg-slate-100">
        <Sidebar />
      </div>
      <div className="col-span-10 my-5">
        <BackButton text="Back To Posts" link="/posts" />
        <h3 className="text-2xl mb-4">Edit Post</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Title"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    Body
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Body"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    Author
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Author"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter date"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full dark:bg-slate-800 dark:text-white">
              Update Post
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PostEditPage;
