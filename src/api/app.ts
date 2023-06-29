#!/usr/bin/env node
import "source-map-support/register"
import { CoolantStack } from "./stack"
import {App} from "@aws-cdk/core"

const app = new App()
// tslint:disable-next-line:no-unused-expression
new CoolantStack(app, "coolant-stack", { })
