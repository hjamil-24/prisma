import { idForProvider } from '../../../_utils/idForProvider'
import testMatrix from '../_matrix'

export default testMatrix.setupSchema(({ provider }) => {
  return /* Prisma */ `
    generator client {
      provider = "prisma-client-js"
      output   = "../generated/prisma/client"
    }
    
    datasource db {
      provider = "${provider}"
      url      = env("DATABASE_URI_${provider}")
    }
    
    model User {
      id        ${idForProvider(provider)}
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
    }
  `
})
