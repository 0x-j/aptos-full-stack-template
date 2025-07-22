"use client";

import { useWalletClient } from "@thalalabs/surf/hooks";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getAptosClient } from "@/lib/aptos";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TransactionOnExplorer } from "@/components/ExplorerLink";
import { ABI } from "@/lib/abi/message_board_abi";
import { useQueryClient } from "@tanstack/react-query";
import { sponsorAndSubmitTxOnServer } from "@/app/actions";

const FormSchema = z.object({
  stringContent: z.string(),
});

export function CreateMessage() {
  const { toast } = useToast();
  const { connected, account, signTransaction } = useWallet();
  const { client: walletClient } = useWalletClient();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      stringContent: "hello world",
    },
  });

  const onSignAndSubmitTransaction = async (
    data: z.infer<typeof FormSchema>
  ) => {
    if (!account || !walletClient) {
      console.error("Account or wallet client not available");
      return;
    }

    const transaction = await getAptosClient().transaction.build.simple({
      sender: account.address,
      withFeePayer: true,
      data: {
        function: `${ABI.address}::${ABI.name}::create_message`,
        functionArguments: [data.stringContent],
      },
      options: {
        maxGasAmount: 10_000,
      },
    });

    const senderAuthenticator = await signTransaction({
      transactionOrPayload: transaction,
    });

    //   await walletClient
    //     .useABI(ABI)
    //     .create_message({
    //       type_arguments: [],
    //       arguments: [data.stringContent],
    //     })
    await sponsorAndSubmitTxOnServer({
      transactionBytes: Array.from(transaction.bcsToBytes()),
      senderAuthenticatorBytes: Array.from(
        senderAuthenticator.authenticator.bcsToBytes()
      ),
    })
      .then((executedTransaction) => {
        toast({
          title: "Success, tx is sponsored haha",
          description: (
            <TransactionOnExplorer hash={executedTransaction.hash} />
          ),
        });
        return new Promise((resolve) => setTimeout(resolve, 3000));
      })
      .then(() => {
        return queryClient.invalidateQueries({ queryKey: ["messages"] });
      })
      .catch((error) => {
        console.error("Error", error);
        toast({
          title: "Error",
          description: "Failed to create a message",
        });
      });
  };

  return (
    <Card className="hover-lift card-gradient border-0 shadow-xl">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-chart-2/10 flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-chart-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <CardTitle className="text-xl font-bold">Create Message</CardTitle>
        </div>
        <CardDescription className="text-base">
          💸 Gasless transactions - no APT required!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSignAndSubmitTransaction)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="stringContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Message Content</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Share your thoughts on the blockchain..."
                      className="h-12 text-base border-2 focus:border-primary/50 transition-colors"
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Your message will be stored permanently on the Aptos blockchain
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={!connected}
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {connected ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Post Message
                </>
              ) : (
                "Connect Wallet to Post"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
