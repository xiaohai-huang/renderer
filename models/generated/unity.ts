//
// Types in assemblies: UnityEngine.CoreModule, UnityEngine.VideoModule, UnityEngine.AudioModule, UnityEngine.UIModule, UnityEngine.UI, UnityEngine.TextRenderingModule, UnityEngine.InputLegacyModule, UnityEngine.AnimationModule, UnityEngine.IMGUIModule
// Generated 7.02.2021 17:05:39
//


export namespace Unity {
  export namespace Collections {
    export enum Allocator {
      Invalid = 0,
      None = 1,
      Temp = 2,
      TempJob = 3,
      Persistent = 4,
      AudioKernel = 5,
    }
    export enum NativeLeakDetectionMode {
      EnabledWithStackTrace = 3,
      Enabled = 2,
      Disabled = 1,
    }
    export interface NativeLeakDetection {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum NativeArrayOptions {
      UninitializedMemory = 0,
      ClearMemory = 1,
    }
    export interface NativeSliceExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export namespace LowLevel {
      export namespace Unsafe {
        export enum EnforceJobResult {
          AllJobsAlreadySynced = 0,
          DidSyncRunningJobs = 1,
          HandleWasAlreadyDeallocated = 2,
        }
        export enum AtomicSafetyErrorType {
          Deallocated = 0,
          DeallocatedFromJob = 1,
          NotAllocatedFromJob = 2,
        }
        export interface AtomicSafetyHandle {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface DisposeSentinel {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface NativeArrayUnsafeUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface NativeSliceUnsafeUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface UnsafeUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
      }
    }
  }
  export namespace IO {
    export namespace LowLevel {
      export namespace Unsafe {
        export interface ReadCommand {
          Buffer: any; // System.Void*
          Offset: any; // System.Int64
          Size: any; // System.Int64
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export enum AssetLoadingSubsystem {
          Other = 0,
          Texture = 1,
          VirtualTexture = 2,
          Mesh = 3,
          Audio = 4,
          Scripts = 5,
          EntitiesScene = 6,
          EntitiesStreamBinaryReader = 7,
        }
        export enum ReadStatus {
          Complete = 0,
          InProgress = 1,
          Failed = 2,
        }
        export enum Priority {
          PriorityLow = 0,
          PriorityHigh = 1,
        }
        export interface ReadHandle {
          JobHandle: Unity.Jobs.JobHandle;
          Status: Unity.IO.LowLevel.Unsafe.ReadStatus;
          IsValid: (() => boolean);
          Dispose: (() => void);
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface AsyncReadManager {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export enum ProcessingState {
          Unknown = 0,
          InQueue = 1,
          Reading = 2,
          Completed = 3,
          Failed = 4,
          Canceled = 5,
        }
        export enum FileReadType {
          Sync = 0,
          Async = 1,
        }
        export interface AsyncReadManagerRequestMetric {
          AssetName: string;
          FileName: string;
          OffsetBytes: any; // System.UInt64
          SizeBytes: any; // System.UInt64
          AssetTypeId: any; // System.UInt64
          CurrentBytesRead: any; // System.UInt64
          BatchReadCount: any; // System.UInt32
          IsBatchRead: boolean;
          State: Unity.IO.LowLevel.Unsafe.ProcessingState;
          ReadType: Unity.IO.LowLevel.Unsafe.FileReadType;
          PriorityLevel: Unity.IO.LowLevel.Unsafe.Priority;
          Subsystem: Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem;
          RequestTimeMicroseconds: number;
          TimeInQueueMicroseconds: number;
          TotalTimeMicroseconds: number;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface AsyncReadManagerMetrics {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export enum AsyncReadManagerMetrics_Flags {
          None = 0,
          ClearOnRead = 1,
        }
        export interface AsyncReadManagerSummaryMetrics {
          TotalBytesRead: any; // System.UInt64
          AverageBandwidthMBPerSecond: number;
          AverageReadSizeInBytes: number;
          AverageWaitTimeMicroseconds: number;
          AverageReadTimeMicroseconds: number;
          AverageTotalRequestTimeMicroseconds: number;
          AverageThroughputMBPerSecond: number;
          LongestWaitTimeMicroseconds: number;
          LongestReadTimeMicroseconds: number;
          LongestReadAssetType: any; // System.UInt64
          LongestWaitAssetType: any; // System.UInt64
          LongestReadSubsystem: Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem;
          LongestWaitSubsystem: Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem;
          NumberOfInProgressRequests: number;
          NumberOfCompletedRequests: number;
          NumberOfFailedRequests: number;
          NumberOfWaitingRequests: number;
          NumberOfCanceledRequests: number;
          TotalNumberOfRequests: number;
          NumberOfCachedReads: number;
          NumberOfAsyncReads: number;
          NumberOfSyncReads: number;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface AsyncReadManagerMetricsFilters {
          SetTypeIDFilter: ((_typeIDs: any) => void) | ((_typeID: any) => void);
          SetStateFilter: ((_states: Unity.IO.LowLevel.Unsafe.ProcessingState[]) => void) | ((_state: Unity.IO.LowLevel.Unsafe.ProcessingState) => void);
          SetReadTypeFilter: ((_readTypes: Unity.IO.LowLevel.Unsafe.FileReadType[]) => void) | ((_readType: Unity.IO.LowLevel.Unsafe.FileReadType) => void);
          SetPriorityFilter: ((_priorityLevels: Unity.IO.LowLevel.Unsafe.Priority[]) => void) | ((_priorityLevel: Unity.IO.LowLevel.Unsafe.Priority) => void);
          SetSubsystemFilter: ((_subsystems: Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem[]) => void) | ((_subsystem: Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem) => void);
          RemoveTypeIDFilter: (() => void);
          RemoveStateFilter: (() => void);
          RemoveReadTypeFilter: (() => void);
          RemovePriorityFilter: (() => void);
          RemoveSubsystemFilter: (() => void);
          ClearFilters: (() => void);
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface VirtualFileSystem {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
      }
    }
  }
  export namespace Jobs {
    export interface IJob {
      Execute: (() => void);
    }
    export interface IJobExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface IJobFor {
      Execute: ((index: number) => void);
    }
    export interface IJobForExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface IJobParallelFor {
      Execute: ((index: number) => void);
    }
    export interface IJobParallelForExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface JobHandle {
      IsCompleted: boolean;
      Complete: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export namespace LowLevel {
      export namespace Unsafe {
        export interface JobHandleUnsafeUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface JobRanges {
          TotalIterationCount: number;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export enum ScheduleMode {
          Run = 0,
          Batched = 1,
          Parallel = 1,
          Single = 2,
        }
        export enum JobType {
          Single = 0,
          ParallelFor = 1,
        }
        export interface JobsUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface JobsUtility_JobScheduleParameters {
          Dependency: Unity.Jobs.JobHandle;
          ScheduleMode: number;
          ReflectionData: any; // System.IntPtr
          JobDataPtr: any; // System.IntPtr
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
      }
    }
  }
  export namespace Profiling {
    export interface ProfilerCategory {
      Name: string;
      Color: UnityEngine.Color32;
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum ProfilerCategoryFlags {
      None = 0,
      Builtin = 1,
    }
    export interface ProfilerMarker {
      Handle: any; // System.IntPtr
      Begin: (() => void) | ((contextUnityObject: UnityEngine.Object) => void);
      End: (() => void);
      Auto: (() => Unity.Profiling.ProfilerMarker_AutoScope);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ProfilerMarker_AutoScope {
      Dispose: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ProfilerFlowEventType {
      Begin = 0,
      ParallelNext = 1,
      End = 2,
      Next = 3,
    }
    export enum ProfilerMarkerDataUnit {
      Undefined = 0,
      TimeNanoseconds = 1,
      Bytes = 2,
      Count = 3,
      Percent = 4,
      FrequencyHz = 5,
    }
    export enum ProfilerCounterOptions {
      None = 0,
      FlushOnEndOfFrame = 2,
      ResetToZeroOnFlush = 4,
    }
    export enum ProfilerRecorderOptions {
      None = 0,
      StartImmediately = 1,
      KeepAliveDuringDomainReload = 2,
      CollectOnlyOnCurrentThread = 4,
      WrapAroundWhenCapacityReached = 8,
      SumAllSamplesInFrame = 16,
      Default = 24,
    }
    export interface ProfilerRecorderSample {
      Value: any; // System.Int64
      Count: any; // System.Int64
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ProfilerRecorder {
      Valid: boolean;
      DataType: Unity.Profiling.LowLevel.ProfilerMarkerDataType;
      UnitType: Unity.Profiling.ProfilerMarkerDataUnit;
      CurrentValue: any; // System.Int64
      CurrentValueAsDouble: number;
      LastValue: any; // System.Int64
      LastValueAsDouble: number;
      Capacity: number;
      Count: number;
      IsRunning: boolean;
      WrappedAround: boolean;
      Start: (() => void);
      Stop: (() => void);
      Reset: (() => void);
      GetSample: ((index: number) => Unity.Profiling.ProfilerRecorderSample);
      CopyTo: ((outSamples: any, reset?: boolean) => void);
      ToArray: (() => Unity.Profiling.ProfilerRecorderSample[]);
      Dispose: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export namespace LowLevel {
      export enum MarkerFlags {
        Default = 0,
        Script = 2,
        ScriptInvoke = 32,
        ScriptDeepProfiler = 64,
        AvailabilityEditor = 4,
        Warning = 16,
        Counter = 128,
      }
      export enum ProfilerMarkerDataType {
        Int32 = 2,
        UInt32 = 3,
        Int64 = 4,
        UInt64 = 5,
        Float = 6,
        Double = 7,
        String16 = 9,
        Blob8 = 11,
      }
      export namespace Unsafe {
        export interface ProfilerRecorderDescription {
          Category: Unity.Profiling.ProfilerCategory;
          Flags: Unity.Profiling.LowLevel.MarkerFlags;
          DataType: Unity.Profiling.LowLevel.ProfilerMarkerDataType;
          UnitType: Unity.Profiling.ProfilerMarkerDataUnit;
          NameUtf8Len: number;
          NameUtf8: any; // System.Byte*
          Name: string;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface ProfilerRecorderHandle {
          Valid: boolean;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface ProfilerMarkerData {
          Type: any; // System.Byte
          Size: any; // System.UInt32
          Ptr: any; // System.Void*
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface ProfilerCategoryDescription {
          Name: string;
          Id: any; // System.UInt16
          Color: UnityEngine.Color32;
          NameUtf8Len: number;
          NameUtf8: any; // System.Byte*
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
        export interface ProfilerUnsafeUtility {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface ProfilerUnsafeUtility_TimestampConversionRatio {
          Numerator: any; // System.Int64
          Denominator: any; // System.Int64
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          ToString: (() => string);
          GetType: (() => any);
        }
      }
    }
  }
  export namespace Rendering {
    export namespace HybridV2 {
      export interface DOTSInstancingCbuffer {
        NameID: number;
        CbufferIndex: number;
        SizeBytes: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export enum DOTSInstancingPropertyType {
        Unknown = 0,
        Float = 1,
        Half = 2,
        Int = 3,
        Short = 4,
        Uint = 5,
        Bool = 6,
        Struct = 7,
      }
      export interface DOTSInstancingProperty {
        MetadataNameID: number;
        ConstantNameID: number;
        CbufferIndex: number;
        MetadataOffset: number;
        SizeBytes: number;
        ConstantType: Unity.Rendering.HybridV2.DOTSInstancingPropertyType;
        Cols: number;
        Rows: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface HybridV2ShaderReflection {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
  }
}
export namespace UnityEngine {
  export enum SendMessageOptions {
    RequireReceiver = 0,
    DontRequireReceiver = 1,
  }
  export enum PrimitiveType {
    Sphere = 0,
    Capsule = 1,
    Cylinder = 2,
    Cube = 3,
    Plane = 4,
    Quad = 5,
  }
  export enum Space {
    World = 0,
    Self = 1,
  }
  export enum RuntimePlatform {
    OSXEditor = 0,
    OSXPlayer = 1,
    WindowsPlayer = 2,
    OSXWebPlayer = 3,
    OSXDashboardPlayer = 4,
    WindowsWebPlayer = 5,
    WindowsEditor = 7,
    IPhonePlayer = 8,
    XBOX360 = 10,
    PS3 = 9,
    Android = 11,
    NaCl = 12,
    FlashPlayer = 15,
    LinuxPlayer = 13,
    LinuxEditor = 16,
    WebGLPlayer = 17,
    MetroPlayerX86 = 18,
    WSAPlayerX86 = 18,
    MetroPlayerX64 = 19,
    WSAPlayerX64 = 19,
    MetroPlayerARM = 20,
    WSAPlayerARM = 20,
    WP8Player = 21,
    BB10Player = 22,
    BlackBerryPlayer = 22,
    TizenPlayer = 23,
    PSP2 = 24,
    PS4 = 25,
    PSM = 26,
    XboxOne = 27,
    SamsungTVPlayer = 28,
    WiiU = 30,
    tvOS = 31,
    Switch = 32,
    Lumin = 33,
    Stadia = 34,
    CloudRendering = 35,
  }
  export enum SystemLanguage {
    Afrikaans = 0,
    Arabic = 1,
    Basque = 2,
    Belarusian = 3,
    Bulgarian = 4,
    Catalan = 5,
    Chinese = 6,
    Czech = 7,
    Danish = 8,
    Dutch = 9,
    English = 10,
    Estonian = 11,
    Faroese = 12,
    Finnish = 13,
    French = 14,
    German = 15,
    Greek = 16,
    Hebrew = 17,
    Hugarian = 18,
    Icelandic = 19,
    Indonesian = 20,
    Italian = 21,
    Japanese = 22,
    Korean = 23,
    Latvian = 24,
    Lithuanian = 25,
    Norwegian = 26,
    Polish = 27,
    Portuguese = 28,
    Romanian = 29,
    Russian = 30,
    SerboCroatian = 31,
    Slovak = 32,
    Slovenian = 33,
    Spanish = 34,
    Swedish = 35,
    Thai = 36,
    Turkish = 37,
    Ukrainian = 38,
    Vietnamese = 39,
    ChineseSimplified = 40,
    ChineseTraditional = 41,
    Unknown = 42,
    Hungarian = 18,
  }
  export enum LogType {
    Error = 0,
    Assert = 1,
    Warning = 2,
    Log = 3,
    Exception = 4,
  }
  export enum LogOption {
    None = 0,
    NoStacktrace = 1,
  }
  export enum ThreadPriority {
    Low = 0,
    BelowNormal = 1,
    Normal = 2,
    High = 4,
  }
  export interface SortingLayer {
    id: number;
    name: string;
    value: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum WeightedMode {
    None = 0,
    In = 1,
    Out = 2,
    Both = 3,
  }
  export interface Keyframe {
    time: number;
    value: number;
    inTangent: number;
    outTangent: number;
    inWeight: number;
    outWeight: number;
    weightedMode: UnityEngine.WeightedMode;
    tangentMode: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum WrapMode {
    Once = 1,
    Loop = 2,
    PingPong = 4,
    Default = 0,
    ClampForever = 8,
    Clamp = 1,
  }
  export interface AnimationCurve {
    keys: UnityEngine.Keyframe[];
    length: number;
    preWrapMode: UnityEngine.WrapMode;
    postWrapMode: UnityEngine.WrapMode;
    Evaluate: ((time: number) => number);
    AddKey: ((time: number, value: number) => number) | ((key: UnityEngine.Keyframe) => number);
    MoveKey: ((index: number, key: UnityEngine.Keyframe) => number);
    RemoveKey: ((index: number) => void);
    SmoothTangents: ((index: number, weight: number) => void);
    Equals: ((o: any) => boolean) | ((other: UnityEngine.AnimationCurve) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Application {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Application_AdvertisingIdentifierCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void);
    BeginInvoke: ((advertisingId: string, trackingEnabled: boolean, errorMsg: string, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Application_LowMemoryCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Application_LogCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((condition: string, stackTrace: string, type: UnityEngine.LogType) => void);
    BeginInvoke: ((condition: string, stackTrace: string, type: UnityEngine.LogType, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum StackTraceLogType {
    None = 0,
    ScriptOnly = 1,
    Full = 2,
  }
  export enum NetworkReachability {
    NotReachable = 0,
    ReachableViaCarrierDataNetwork = 1,
    ReachableViaLocalAreaNetwork = 2,
  }
  export enum UserAuthorization {
    WebCam = 1,
    Microphone = 2,
  }
  export enum ApplicationInstallMode {
    Unknown = 0,
    Store = 1,
    DeveloperBuild = 2,
    Adhoc = 3,
    Enterprise = 4,
    Editor = 5,
  }
  export enum ApplicationSandboxType {
    Unknown = 0,
    NotSandboxed = 1,
    Sandboxed = 2,
    SandboxBroken = 3,
  }
  export enum AudioType {
    UNKNOWN = 0,
    ACC = 1,
    AIFF = 2,
    IT = 10,
    MOD = 12,
    MPEG = 13,
    OGGVORBIS = 14,
    S3M = 17,
    WAV = 20,
    XM = 21,
    XMA = 22,
    VAG = 23,
    AUDIOQUEUE = 24,
  }
  export interface CachedAssetBundle {
    name: string;
    hash: UnityEngine.Hash128;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Cache {
    valid: boolean;
    ready: boolean;
    readOnly: boolean;
    path: string;
    index: number;
    spaceFree: any; // System.Int64
    maximumAvailableStorageSpace: any; // System.Int64
    spaceOccupied: any; // System.Int64
    expirationDelay: number;
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Cache) => boolean);
    ClearCache: (() => boolean) | ((expiration: number) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CacheIndex {
    name: string;
    bytesUsed: number;
    expires: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Caching {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Camera {
    nearClipPlane: number;
    farClipPlane: number;
    fieldOfView: number;
    renderingPath: UnityEngine.RenderingPath;
    actualRenderingPath: UnityEngine.RenderingPath;
    allowHDR: boolean;
    allowMSAA: boolean;
    allowDynamicResolution: boolean;
    forceIntoRenderTexture: boolean;
    orthographicSize: number;
    orthographic: boolean;
    opaqueSortMode: UnityEngine.Rendering.OpaqueSortMode;
    transparencySortMode: UnityEngine.TransparencySortMode;
    transparencySortAxis: UnityEngine.Vector3;
    depth: number;
    aspect: number;
    velocity: UnityEngine.Vector3;
    cullingMask: number;
    eventMask: number;
    layerCullSpherical: boolean;
    cameraType: UnityEngine.CameraType;
    overrideSceneCullingMask: any; // System.UInt64
    layerCullDistances: any; // System.Single[]
    useOcclusionCulling: boolean;
    cullingMatrix: UnityEngine.Matrix4x4;
    backgroundColor: UnityEngine.Color;
    clearFlags: UnityEngine.CameraClearFlags;
    depthTextureMode: UnityEngine.DepthTextureMode;
    clearStencilAfterLightingPass: boolean;
    usePhysicalProperties: boolean;
    sensorSize: UnityEngine.Vector2;
    lensShift: UnityEngine.Vector2;
    focalLength: number;
    gateFit: UnityEngine.Camera_GateFitMode;
    rect: UnityEngine.Rect;
    pixelRect: UnityEngine.Rect;
    pixelWidth: number;
    pixelHeight: number;
    scaledPixelWidth: number;
    scaledPixelHeight: number;
    targetTexture: UnityEngine.RenderTexture;
    activeTexture: UnityEngine.RenderTexture;
    targetDisplay: number;
    cameraToWorldMatrix: UnityEngine.Matrix4x4;
    worldToCameraMatrix: UnityEngine.Matrix4x4;
    projectionMatrix: UnityEngine.Matrix4x4;
    nonJitteredProjectionMatrix: UnityEngine.Matrix4x4;
    useJitteredProjectionMatrixForTransparentRendering: boolean;
    previousViewProjectionMatrix: UnityEngine.Matrix4x4;
    scene: UnityEngine.SceneManagement.Scene;
    stereoEnabled: boolean;
    stereoSeparation: number;
    stereoConvergence: number;
    areVRStereoViewMatricesWithinSingleCullTolerance: boolean;
    stereoTargetEye: UnityEngine.StereoTargetEyeMask;
    stereoActiveEye: UnityEngine.Camera_MonoOrStereoscopicEye;
    commandBufferCount: number;
    isOrthoGraphic: boolean;
    near: number;
    far: number;
    fov: number;
    hdr: boolean;
    stereoMirrorMode: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Reset: (() => void);
    ResetTransparencySortSettings: (() => void);
    ResetAspect: (() => void);
    ResetCullingMatrix: (() => void);
    SetReplacementShader: ((shader: UnityEngine.Shader, replacementTag: string) => void);
    ResetReplacementShader: (() => void);
    GetGateFittedFieldOfView: (() => number);
    GetGateFittedLensShift: (() => UnityEngine.Vector2);
    SetTargetBuffers: ((colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer) => void) | ((colorBuffer: UnityEngine.RenderBuffer[], depthBuffer: UnityEngine.RenderBuffer) => void);
    ResetWorldToCameraMatrix: (() => void);
    ResetProjectionMatrix: (() => void);
    CalculateObliqueMatrix: ((clipPlane: UnityEngine.Vector4) => UnityEngine.Matrix4x4);
    WorldToScreenPoint: ((position: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Vector3) | ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    WorldToViewportPoint: ((position: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Vector3) | ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    ViewportToWorldPoint: ((position: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Vector3) | ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    ScreenToWorldPoint: ((position: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Vector3) | ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    ScreenToViewportPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    ViewportToScreenPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3);
    ViewportPointToRay: ((pos: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Ray) | ((pos: UnityEngine.Vector3) => UnityEngine.Ray);
    ScreenPointToRay: ((pos: UnityEngine.Vector3, eye: UnityEngine.Camera_MonoOrStereoscopicEye) => UnityEngine.Ray) | ((pos: UnityEngine.Vector3) => UnityEngine.Ray);
    CalculateFrustumCorners: ((viewport: UnityEngine.Rect, z: number, eye: UnityEngine.Camera_MonoOrStereoscopicEye, outCorners: UnityEngine.Vector3[]) => void);
    GetStereoNonJitteredProjectionMatrix: ((eye: UnityEngine.Camera_StereoscopicEye) => UnityEngine.Matrix4x4);
    GetStereoViewMatrix: ((eye: UnityEngine.Camera_StereoscopicEye) => UnityEngine.Matrix4x4);
    CopyStereoDeviceProjectionMatrixToNonJittered: ((eye: UnityEngine.Camera_StereoscopicEye) => void);
    GetStereoProjectionMatrix: ((eye: UnityEngine.Camera_StereoscopicEye) => UnityEngine.Matrix4x4);
    SetStereoProjectionMatrix: ((eye: UnityEngine.Camera_StereoscopicEye, matrix: UnityEngine.Matrix4x4) => void);
    ResetStereoProjectionMatrices: (() => void);
    SetStereoViewMatrix: ((eye: UnityEngine.Camera_StereoscopicEye, matrix: UnityEngine.Matrix4x4) => void);
    ResetStereoViewMatrices: (() => void);
    RenderToCubemap: ((cubemap: UnityEngine.Cubemap, faceMask: number) => boolean) | ((cubemap: UnityEngine.Cubemap) => boolean) | ((cubemap: UnityEngine.RenderTexture, faceMask: number) => boolean) | ((cubemap: UnityEngine.RenderTexture) => boolean) | ((cubemap: UnityEngine.RenderTexture, faceMask: number, stereoEye: UnityEngine.Camera_MonoOrStereoscopicEye) => boolean);
    Render: (() => void);
    RenderWithShader: ((shader: UnityEngine.Shader, replacementTag: string) => void);
    RenderDontRestore: (() => void);
    SubmitRenderRequests: ((renderRequests: any) => void);
    CopyFrom: ((other: UnityEngine.Camera) => void);
    RemoveCommandBuffers: ((evt: UnityEngine.Rendering.CameraEvent) => void);
    RemoveAllCommandBuffers: (() => void);
    AddCommandBuffer: ((evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer) => void);
    AddCommandBufferAsync: ((evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer, queueType: UnityEngine.Rendering.ComputeQueueType) => void);
    RemoveCommandBuffer: ((evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer) => void);
    GetCommandBuffers: ((evt: UnityEngine.Rendering.CameraEvent) => UnityEngine.Rendering.CommandBuffer[]);
    GetScreenWidth: (() => number);
    GetScreenHeight: (() => number);
    DoClear: (() => void);
    ResetFieldOfView: (() => void);
    SetStereoViewMatrices: ((leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4) => void);
    SetStereoProjectionMatrices: ((leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4) => void);
    GetStereoViewMatrices: (() => UnityEngine.Matrix4x4[]);
    GetStereoProjectionMatrices: (() => UnityEngine.Matrix4x4[]);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum Camera_GateFitMode {
    Vertical = 1,
    Horizontal = 2,
    Fill = 3,
    Overscan = 4,
    None = 0,
  }
  export enum Camera_FieldOfViewAxis {
    Vertical = 0,
    Horizontal = 1,
  }
  export interface Camera_GateFitParameters {
    mode: UnityEngine.Camera_GateFitMode;
    aspect: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum Camera_StereoscopicEye {
    Left = 0,
    Right = 1,
  }
  export enum Camera_MonoOrStereoscopicEye {
    Left = 0,
    Right = 1,
    Mono = 2,
  }
  export enum Camera_RenderRequestMode {
    None = 0,
    ObjectId = 1,
    Depth = 2,
    VertexNormal = 3,
    WorldPosition = 4,
    EntityId = 5,
    BaseColor = 6,
    SpecularColor = 7,
    Metallic = 8,
    Emission = 9,
    Normal = 10,
    Smoothness = 11,
    Occlusion = 12,
    DiffuseColor = 13,
  }
  export enum Camera_RenderRequestOutputSpace {
    ScreenSpace = -1,
    UV0 = 0,
    UV1 = 1,
    UV2 = 2,
    UV3 = 3,
    UV4 = 4,
    UV5 = 5,
    UV6 = 6,
    UV7 = 7,
    UV8 = 8,
  }
  export interface Camera_RenderRequest {
    isValid: boolean;
    mode: UnityEngine.Camera_RenderRequestMode;
    result: UnityEngine.RenderTexture;
    outputSpace: UnityEngine.Camera_RenderRequestOutputSpace;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Camera_CameraCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((cam: UnityEngine.Camera) => void);
    BeginInvoke: ((cam: UnityEngine.Camera, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface BoundingSphere {
    position: UnityEngine.Vector3;
    radius: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CullingGroupEvent {
    index: number;
    isVisible: boolean;
    wasVisible: boolean;
    hasBecomeVisible: boolean;
    hasBecomeInvisible: boolean;
    currentDistance: number;
    previousDistance: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CullingGroup {
    onStateChanged: UnityEngine.CullingGroup_StateChanged;
    enabled: boolean;
    targetCamera: UnityEngine.Camera;
    Dispose: (() => void);
    SetBoundingSpheres: ((array: UnityEngine.BoundingSphere[]) => void);
    SetBoundingSphereCount: ((count: number) => void);
    EraseSwapBack: ((index: number) => void);
    QueryIndices: ((visible: boolean, result: any, firstIndex: number) => number) | ((distanceIndex: number, result: any, firstIndex: number) => number) | ((visible: boolean, distanceIndex: number, result: any, firstIndex: number) => number);
    IsVisible: ((index: number) => boolean);
    GetDistance: ((index: number) => number);
    SetBoundingDistances: ((distances: any) => void);
    SetDistanceReferencePoint: ((point: UnityEngine.Vector3) => void) | ((transform: UnityEngine.Transform) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface CullingGroup_StateChanged {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((sphere: UnityEngine.CullingGroupEvent) => void);
    BeginInvoke: ((sphere: UnityEngine.CullingGroupEvent, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface FlareLayer {
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface ReflectionProbe {
    type: UnityEngine.Rendering.ReflectionProbeType;
    size: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    nearClipPlane: number;
    farClipPlane: number;
    intensity: number;
    bounds: UnityEngine.Bounds;
    hdr: boolean;
    renderDynamicObjects: boolean;
    shadowDistance: number;
    resolution: number;
    cullingMask: number;
    clearFlags: UnityEngine.Rendering.ReflectionProbeClearFlags;
    backgroundColor: UnityEngine.Color;
    blendDistance: number;
    boxProjection: boolean;
    mode: UnityEngine.Rendering.ReflectionProbeMode;
    importance: number;
    refreshMode: UnityEngine.Rendering.ReflectionProbeRefreshMode;
    timeSlicingMode: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
    bakedTexture: UnityEngine.Texture;
    customBakedTexture: UnityEngine.Texture;
    realtimeTexture: UnityEngine.RenderTexture;
    texture: UnityEngine.Texture;
    textureHDRDecodeValues: UnityEngine.Vector4;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Reset: (() => void);
    RenderProbe: (() => number) | ((targetTexture: UnityEngine.RenderTexture) => number);
    IsFinishedRendering: ((renderId: number) => boolean);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum ReflectionProbe_ReflectionProbeEvent {
    ReflectionProbeAdded = 0,
    ReflectionProbeRemoved = 1,
  }
  export interface CrashReport {
    time: any; // System.DateTime
    text: string;
    Remove: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Debug {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ExposedPropertyResolver {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface IExposedPropertyTable {
    SetReferenceValue: ((id: UnityEngine.PropertyName, value: UnityEngine.Object) => void);
    ClearReferenceValue: ((id: UnityEngine.PropertyName) => void);
  }
  export interface EventProvider {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Bounds {
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    extents: UnityEngine.Vector3;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Bounds) => boolean);
    SetMinMax: ((min: UnityEngine.Vector3, max: UnityEngine.Vector3) => void);
    Encapsulate: ((point: UnityEngine.Vector3) => void) | ((bounds: UnityEngine.Bounds) => void);
    Expand: ((amount: number) => void) | ((amount: UnityEngine.Vector3) => void);
    Intersects: ((bounds: UnityEngine.Bounds) => boolean);
    IntersectRay: ((ray: UnityEngine.Ray) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Contains: ((point: UnityEngine.Vector3) => boolean);
    SqrDistance: ((point: UnityEngine.Vector3) => number);
    ClosestPoint: ((point: UnityEngine.Vector3) => UnityEngine.Vector3);
    GetType: (() => any);
  }
  export interface BoundsInt {
    x: number;
    y: number;
    z: number;
    center: UnityEngine.Vector3;
    min: UnityEngine.Vector3Int;
    max: UnityEngine.Vector3Int;
    xMin: number;
    yMin: number;
    zMin: number;
    xMax: number;
    yMax: number;
    zMax: number;
    position: UnityEngine.Vector3Int;
    size: UnityEngine.Vector3Int;
    allPositionsWithin: UnityEngine.BoundsInt_PositionEnumerator;
    SetMinMax: ((minPosition: UnityEngine.Vector3Int, maxPosition: UnityEngine.Vector3Int) => void);
    ClampToBounds: ((bounds: UnityEngine.BoundsInt) => void);
    Contains: ((position: UnityEngine.Vector3Int) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.BoundsInt) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface BoundsInt_PositionEnumerator {
    Current: UnityEngine.Vector3Int;
    GetEnumerator: (() => UnityEngine.BoundsInt_PositionEnumerator);
    MoveNext: (() => boolean);
    Reset: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface GeometryUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Plane {
    normal: UnityEngine.Vector3;
    distance: number;
    flipped: UnityEngine.Plane;
    SetNormalAndPosition: ((inNormal: UnityEngine.Vector3, inPoint: UnityEngine.Vector3) => void);
    Set3Points: ((a: UnityEngine.Vector3, b: UnityEngine.Vector3, c: UnityEngine.Vector3) => void);
    Flip: (() => void);
    Translate: ((translation: UnityEngine.Vector3) => void);
    ClosestPointOnPlane: ((point: UnityEngine.Vector3) => UnityEngine.Vector3);
    GetDistanceToPoint: ((point: UnityEngine.Vector3) => number);
    GetSide: ((point: UnityEngine.Vector3) => boolean);
    SameSide: ((inPt0: UnityEngine.Vector3, inPt1: UnityEngine.Vector3) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface Ray {
    origin: UnityEngine.Vector3;
    direction: UnityEngine.Vector3;
    GetPoint: ((distance: number) => UnityEngine.Vector3);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface Ray2D {
    origin: UnityEngine.Vector2;
    direction: UnityEngine.Vector2;
    GetPoint: ((distance: number) => UnityEngine.Vector2);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface Rect {
    x: number;
    y: number;
    position: UnityEngine.Vector2;
    center: UnityEngine.Vector2;
    min: UnityEngine.Vector2;
    max: UnityEngine.Vector2;
    width: number;
    height: number;
    size: UnityEngine.Vector2;
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    Set: ((x: number, y: number, width: number, height: number) => void);
    Contains: ((point: UnityEngine.Vector2) => boolean) | ((point: UnityEngine.Vector3) => boolean) | ((point: UnityEngine.Vector3, allowInverse: boolean) => boolean);
    Overlaps: ((other: UnityEngine.Rect) => boolean) | ((other: UnityEngine.Rect, allowInverse: boolean) => boolean);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Rect) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetType: (() => any);
  }
  export interface RectInt {
    x: number;
    y: number;
    center: UnityEngine.Vector2;
    min: UnityEngine.Vector2Int;
    max: UnityEngine.Vector2Int;
    width: number;
    height: number;
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
    position: UnityEngine.Vector2Int;
    size: UnityEngine.Vector2Int;
    allPositionsWithin: UnityEngine.RectInt_PositionEnumerator;
    SetMinMax: ((minPosition: UnityEngine.Vector2Int, maxPosition: UnityEngine.Vector2Int) => void);
    ClampToBounds: ((bounds: UnityEngine.RectInt) => void);
    Contains: ((position: UnityEngine.Vector2Int) => boolean);
    Overlaps: ((other: UnityEngine.RectInt) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((other: UnityEngine.RectInt) => boolean) | ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface RectInt_PositionEnumerator {
    Current: UnityEngine.Vector2Int;
    GetEnumerator: (() => UnityEngine.RectInt_PositionEnumerator);
    MoveNext: (() => boolean);
    Reset: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RectOffset {
    left: number;
    right: number;
    top: number;
    bottom: number;
    horizontal: number;
    vertical: number;
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Add: ((rect: UnityEngine.Rect) => UnityEngine.Rect);
    Remove: ((rect: UnityEngine.Rect) => UnityEngine.Rect);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface DynamicGI {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface LightingSettings {
    bakedGI: boolean;
    realtimeGI: boolean;
    realtimeEnvironmentLighting: boolean;
    autoGenerate: boolean;
    mixedBakeMode: UnityEngine.MixedLightingMode;
    albedoBoost: number;
    indirectScale: number;
    lightmapper: UnityEngine.LightingSettings_Lightmapper;
    lightmapMaxSize: number;
    lightmapResolution: number;
    lightmapPadding: number;
    compressLightmaps: boolean;
    ao: boolean;
    aoMaxDistance: number;
    aoExponentIndirect: number;
    aoExponentDirect: number;
    extractAO: boolean;
    directionalityMode: UnityEngine.LightmapsMode;
    exportTrainingData: boolean;
    trainingDataDestination: string;
    indirectResolution: number;
    finalGather: boolean;
    finalGatherRayCount: number;
    finalGatherFiltering: boolean;
    sampling: UnityEngine.LightingSettings_Sampling;
    directSampleCount: number;
    indirectSampleCount: number;
    bounces: number;
    maxBounces: number;
    russianRouletteStartBounce: number;
    minBounces: number;
    prioritizeView: boolean;
    filteringMode: UnityEngine.LightingSettings_FilterMode;
    denoiserTypeDirect: UnityEngine.LightingSettings_DenoiserType;
    denoiserTypeIndirect: UnityEngine.LightingSettings_DenoiserType;
    denoiserTypeAO: UnityEngine.LightingSettings_DenoiserType;
    filterTypeDirect: UnityEngine.LightingSettings_FilterType;
    filterTypeIndirect: UnityEngine.LightingSettings_FilterType;
    filterTypeAO: UnityEngine.LightingSettings_FilterType;
    filteringGaussRadiusDirect: number;
    filteringGaussRadiusIndirect: number;
    filteringGaussRadiusAO: number;
    filteringAtrousPositionSigmaDirect: number;
    filteringAtrousPositionSigmaIndirect: number;
    filteringAtrousPositionSigmaAO: number;
    environmentSampleCount: number;
    lightProbeSampleCountMultiplier: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LightingSettings_Lightmapper {
    Enlighten = 0,
    ProgressiveCPU = 1,
    ProgressiveGPU = 2,
  }
  export enum LightingSettings_Sampling {
    Auto = 0,
    Fixed = 1,
  }
  export enum LightingSettings_FilterMode {
    None = 0,
    Auto = 1,
    Advanced = 2,
  }
  export enum LightingSettings_DenoiserType {
    None = 0,
    Optix = 1,
    OpenImage = 2,
    RadeonPro = 3,
  }
  export enum LightingSettings_FilterType {
    Gaussian = 0,
    ATrous = 1,
    None = 2,
  }
  export interface Gizmos {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface BillboardAsset {
    width: number;
    height: number;
    bottom: number;
    imageCount: number;
    vertexCount: number;
    indexCount: number;
    material: UnityEngine.Material;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetImageTexCoords: ((imageTexCoords: any) => void) | (() => UnityEngine.Vector4[]);
    SetImageTexCoords: ((imageTexCoords: any) => void) | ((imageTexCoords: UnityEngine.Vector4[]) => void);
    GetVertices: ((vertices: any) => void) | (() => UnityEngine.Vector2[]);
    SetVertices: ((vertices: any) => void) | ((vertices: UnityEngine.Vector2[]) => void);
    GetIndices: ((indices: any) => void) | (() => any);
    SetIndices: ((indices: any) => void) | ((indices: any) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface BillboardRenderer {
    billboard: UnityEngine.BillboardAsset;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CustomRenderTextureManager {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Display {
    renderingWidth: number;
    renderingHeight: number;
    systemWidth: number;
    systemHeight: number;
    colorBuffer: UnityEngine.RenderBuffer;
    depthBuffer: UnityEngine.RenderBuffer;
    active: boolean;
    requiresBlitToBackbuffer: boolean;
    requiresSrgbBlitToBackbuffer: boolean;
    Activate: (() => void) | ((width: number, height: number, refreshRate: number) => void);
    SetParams: ((width: number, height: number, x: number, y: number) => void);
    SetRenderingResolution: ((w: number, h: number) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Display_DisplaysUpdatedDelegate {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum FullScreenMode {
    ExclusiveFullScreen = 0,
    FullScreenWindow = 1,
    MaximizedWindow = 2,
    Windowed = 3,
  }
  export interface SleepTimeout {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Screen {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface RenderBuffer {
    GetNativeRenderBufferPtr: (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum ComputeBufferMode {
    Immutable = 0,
    Dynamic = 1,
    Circular = 2,
    StreamOut = 3,
    SubUpdates = 4,
  }
  export interface Graphics {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GL {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ScalableBufferManager {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface FrameTiming {
    cpuTimePresentCalled: any; // System.UInt64
    cpuFrameTime: number;
    cpuTimeFrameComplete: any; // System.UInt64
    gpuFrameTime: number;
    heightScale: number;
    widthScale: number;
    syncInterval: any; // System.UInt32
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface FrameTimingManager {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface LightmapData {
    lightmapLight: UnityEngine.Texture2D;
    lightmapColor: UnityEngine.Texture2D;
    lightmapDir: UnityEngine.Texture2D;
    shadowMask: UnityEngine.Texture2D;
    lightmap: UnityEngine.Texture2D;
    lightmapFar: UnityEngine.Texture2D;
    lightmapNear: UnityEngine.Texture2D;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface LightmapSettings {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LightProbes {
    positions: UnityEngine.Vector3[];
    bakedProbes: UnityEngine.Rendering.SphericalHarmonicsL2[];
    count: number;
    cellCount: number;
    coefficients: any; // System.Single[]
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInterpolatedLightProbe: ((position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, coefficients: any) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum D3DHDRDisplayBitDepth {
    D3DHDRDisplayBitDepth10 = 0,
    D3DHDRDisplayBitDepth16 = 1,
  }
  export interface HDROutputSettings {
    active: boolean;
    available: boolean;
    automaticHDRTonemapping: boolean;
    displayColorGamut: UnityEngine.ColorGamut;
    format: UnityEngine.RenderTextureFormat;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    paperWhiteNits: number;
    maxFullFrameToneMapLuminance: number;
    maxToneMapLuminance: number;
    minToneMapLuminance: number;
    HDRModeChangeRequested: boolean;
    RequestHDRModeChange: ((enabled: boolean) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Resolution {
    width: number;
    height: number;
    refreshRate: number;
    ToString: (() => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface RenderTargetSetup {
    color: UnityEngine.RenderBuffer[];
    depth: UnityEngine.RenderBuffer;
    mipLevel: number;
    cubemapFace: UnityEngine.CubemapFace;
    depthSlice: number;
    colorLoad: UnityEngine.Rendering.RenderBufferLoadAction[];
    colorStore: UnityEngine.Rendering.RenderBufferStoreAction[];
    depthLoad: UnityEngine.Rendering.RenderBufferLoadAction;
    depthStore: UnityEngine.Rendering.RenderBufferStoreAction;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface QualitySettings {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RendererExtensions {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Mesh {
    uv1: UnityEngine.Vector2[];
    indexFormat: UnityEngine.Rendering.IndexFormat;
    vertexBufferCount: number;
    blendShapeCount: number;
    bindposes: UnityEngine.Matrix4x4[];
    isReadable: boolean;
    vertexCount: number;
    subMeshCount: number;
    bounds: UnityEngine.Bounds;
    vertices: UnityEngine.Vector3[];
    normals: UnityEngine.Vector3[];
    tangents: UnityEngine.Vector4[];
    uv: UnityEngine.Vector2[];
    uv2: UnityEngine.Vector2[];
    uv3: UnityEngine.Vector2[];
    uv4: UnityEngine.Vector2[];
    uv5: UnityEngine.Vector2[];
    uv6: UnityEngine.Vector2[];
    uv7: UnityEngine.Vector2[];
    uv8: UnityEngine.Vector2[];
    colors: UnityEngine.Color[];
    colors32: UnityEngine.Color32[];
    vertexAttributeCount: number;
    triangles: any; // System.Int32[]
    boneWeights: UnityEngine.BoneWeight[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetIndexBufferParams: ((indexCount: number, format: UnityEngine.Rendering.IndexFormat) => void);
    GetVertexAttribute: ((index: number) => UnityEngine.Rendering.VertexAttributeDescriptor);
    HasVertexAttribute: ((attr: UnityEngine.Rendering.VertexAttribute) => boolean);
    GetVertexAttributeDimension: ((attr: UnityEngine.Rendering.VertexAttribute) => number);
    GetVertexAttributeFormat: ((attr: UnityEngine.Rendering.VertexAttribute) => UnityEngine.Rendering.VertexAttributeFormat);
    GetNativeVertexBufferPtr: ((index: number) => any);
    GetNativeIndexBufferPtr: (() => any);
    ClearBlendShapes: (() => void);
    GetBlendShapeName: ((shapeIndex: number) => string);
    GetBlendShapeIndex: ((blendShapeName: string) => number);
    GetBlendShapeFrameCount: ((shapeIndex: number) => number);
    GetBlendShapeFrameWeight: ((shapeIndex: number, frameIndex: number) => number);
    GetBlendShapeFrameVertices: ((shapeIndex: number, frameIndex: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]) => void);
    AddBlendShapeFrame: ((shapeName: string, frameWeight: number, deltaVertices: UnityEngine.Vector3[], deltaNormals: UnityEngine.Vector3[], deltaTangents: UnityEngine.Vector3[]) => void);
    SetBoneWeights: ((bonesPerVertex: any, weights: any) => void);
    GetAllBoneWeights: (() => any);
    GetBonesPerVertex: (() => any);
    SetSubMesh: ((index: number, desc: UnityEngine.Rendering.SubMeshDescriptor, flags?: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetSubMesh: ((index: number) => UnityEngine.Rendering.SubMeshDescriptor);
    MarkModified: (() => void);
    GetUVDistributionMetric: ((uvSetIndex: number) => number);
    GetVertices: ((vertices: any) => void);
    SetVertices: ((inVertices: any) => void) | ((inVertices: any, start: number, length: number) => void) | ((inVertices: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inVertices: UnityEngine.Vector3[]) => void) | ((inVertices: UnityEngine.Vector3[], start: number, length: number) => void) | ((inVertices: UnityEngine.Vector3[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetNormals: ((normals: any) => void);
    SetNormals: ((inNormals: any) => void) | ((inNormals: any, start: number, length: number) => void) | ((inNormals: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inNormals: UnityEngine.Vector3[]) => void) | ((inNormals: UnityEngine.Vector3[], start: number, length: number) => void) | ((inNormals: UnityEngine.Vector3[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetTangents: ((tangents: any) => void);
    SetTangents: ((inTangents: any) => void) | ((inTangents: any, start: number, length: number) => void) | ((inTangents: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inTangents: UnityEngine.Vector4[]) => void) | ((inTangents: UnityEngine.Vector4[], start: number, length: number) => void) | ((inTangents: UnityEngine.Vector4[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetColors: ((colors: any) => void) | ((colors: any) => void);
    SetColors: ((inColors: any) => void) | ((inColors: any, start: number, length: number) => void) | ((inColors: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inColors: UnityEngine.Color[]) => void) | ((inColors: UnityEngine.Color[], start: number, length: number) => void) | ((inColors: UnityEngine.Color[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inColors: any) => void) | ((inColors: any, start: number, length: number) => void) | ((inColors: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((inColors: UnityEngine.Color32[]) => void) | ((inColors: UnityEngine.Color32[], start: number, length: number) => void) | ((inColors: UnityEngine.Color32[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    SetUVs: ((channel: number, uvs: any) => void) | ((channel: number, uvs: any) => void) | ((channel: number, uvs: any) => void) | ((channel: number, uvs: any, start: number, length: number) => void) | ((channel: number, uvs: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((channel: number, uvs: any, start: number, length: number) => void) | ((channel: number, uvs: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((channel: number, uvs: any, start: number, length: number) => void) | ((channel: number, uvs: any, start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((channel: number, uvs: UnityEngine.Vector2[]) => void) | ((channel: number, uvs: UnityEngine.Vector3[]) => void) | ((channel: number, uvs: UnityEngine.Vector4[]) => void) | ((channel: number, uvs: UnityEngine.Vector2[], start: number, length: number) => void) | ((channel: number, uvs: UnityEngine.Vector2[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((channel: number, uvs: UnityEngine.Vector3[], start: number, length: number) => void) | ((channel: number, uvs: UnityEngine.Vector3[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((channel: number, uvs: UnityEngine.Vector4[], start: number, length: number) => void) | ((channel: number, uvs: UnityEngine.Vector4[], start: number, length: number, flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetUVs: ((channel: number, uvs: any) => void) | ((channel: number, uvs: any) => void) | ((channel: number, uvs: any) => void);
    GetVertexAttributes: (() => UnityEngine.Rendering.VertexAttributeDescriptor[]) | ((attributes: UnityEngine.Rendering.VertexAttributeDescriptor[]) => number) | ((attributes: any) => number);
    SetVertexBufferParams: ((vertexCount: number, attributes: UnityEngine.Rendering.VertexAttributeDescriptor[]) => void) | ((vertexCount: number, attributes: any) => void);
    GetTriangles: ((submesh: number) => any) | ((submesh: number, applyBaseVertex: boolean) => any) | ((triangles: any, submesh: number) => void) | ((triangles: any, submesh: number, applyBaseVertex: boolean) => void) | ((triangles: any, submesh: number, applyBaseVertex?: boolean) => void);
    GetIndices: ((submesh: number) => any) | ((submesh: number, applyBaseVertex: boolean) => any) | ((indices: any, submesh: number) => void) | ((indices: any, submesh: number, applyBaseVertex: boolean) => void) | ((indices: any, submesh: number, applyBaseVertex?: boolean) => void);
    GetIndexStart: ((submesh: number) => any);
    GetIndexCount: ((submesh: number) => any);
    GetBaseVertex: ((submesh: number) => any);
    SetTriangles: ((triangles: any, submesh: number) => void) | ((triangles: any, submesh: number, calculateBounds: boolean) => void) | ((triangles: any, submesh: number, calculateBounds: boolean, baseVertex: number) => void) | ((triangles: any, trianglesStart: number, trianglesLength: number, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((triangles: any, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((triangles: any, trianglesStart: number, trianglesLength: number, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((triangles: any, submesh: number) => void) | ((triangles: any, submesh: number, calculateBounds: boolean) => void) | ((triangles: any, submesh: number, calculateBounds: boolean, baseVertex: number) => void) | ((triangles: any, trianglesStart: number, trianglesLength: number, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((triangles: any, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((triangles: any, trianglesStart: number, trianglesLength: number, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void);
    SetIndices: ((indices: any, topology: UnityEngine.MeshTopology, submesh: number) => void) | ((indices: any, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds: boolean) => void) | ((indices: any, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds: boolean, baseVertex: number) => void) | ((indices: any, indicesStart: number, indicesLength: number, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, indicesStart: number, indicesLength: number, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, indicesStart: number, indicesLength: number, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void) | ((indices: any, indicesStart: number, indicesLength: number, topology: UnityEngine.MeshTopology, submesh: number, calculateBounds?: boolean, baseVertex?: number) => void);
    SetSubMeshes: ((desc: UnityEngine.Rendering.SubMeshDescriptor[], start: number, count: number, flags?: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((desc: UnityEngine.Rendering.SubMeshDescriptor[], flags?: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((desc: any, start: number, count: number, flags?: UnityEngine.Rendering.MeshUpdateFlags) => void) | ((desc: any, flags?: UnityEngine.Rendering.MeshUpdateFlags) => void);
    GetBindposes: ((bindposes: any) => void);
    GetBoneWeights: ((boneWeights: any) => void);
    Clear: ((keepVertexLayout: boolean) => void) | (() => void);
    RecalculateBounds: (() => void) | ((flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    RecalculateNormals: (() => void) | ((flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    RecalculateTangents: (() => void) | ((flags: UnityEngine.Rendering.MeshUpdateFlags) => void);
    RecalculateUVDistributionMetric: ((uvSetIndex: number, uvAreaThreshold?: number) => void);
    RecalculateUVDistributionMetrics: ((uvAreaThreshold?: number) => void);
    MarkDynamic: (() => void);
    UploadMeshData: ((markNoLongerReadable: boolean) => void);
    Optimize: (() => void);
    OptimizeIndexBuffers: (() => void);
    OptimizeReorderVertexBuffer: (() => void);
    GetTopology: ((submesh: number) => UnityEngine.MeshTopology);
    CombineMeshes: ((combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean, useMatrices: boolean, hasLightmapData: boolean) => void) | ((combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean, useMatrices: boolean) => void) | ((combine: UnityEngine.CombineInstance[], mergeSubMeshes: boolean) => void) | ((combine: UnityEngine.CombineInstance[]) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Mesh_MeshData {
    vertexCount: number;
    vertexBufferCount: number;
    indexFormat: UnityEngine.Rendering.IndexFormat;
    subMeshCount: number;
    HasVertexAttribute: ((attr: UnityEngine.Rendering.VertexAttribute) => boolean);
    GetVertexAttributeDimension: ((attr: UnityEngine.Rendering.VertexAttribute) => number);
    GetVertexAttributeFormat: ((attr: UnityEngine.Rendering.VertexAttribute) => UnityEngine.Rendering.VertexAttributeFormat);
    GetVertices: ((outVertices: any) => void);
    GetNormals: ((outNormals: any) => void);
    GetTangents: ((outTangents: any) => void);
    GetColors: ((outColors: any) => void) | ((outColors: any) => void);
    GetUVs: ((channel: number, outUVs: any) => void) | ((channel: number, outUVs: any) => void) | ((channel: number, outUVs: any) => void);
    SetVertexBufferParams: ((vertexCount: number, attributes: UnityEngine.Rendering.VertexAttributeDescriptor[]) => void) | ((vertexCount: number, attributes: any) => void);
    SetIndexBufferParams: ((indexCount: number, format: UnityEngine.Rendering.IndexFormat) => void);
    GetIndices: ((outIndices: any, submesh: number, applyBaseVertex?: boolean) => void) | ((outIndices: any, submesh: number, applyBaseVertex?: boolean) => void);
    GetSubMesh: ((index: number) => UnityEngine.Rendering.SubMeshDescriptor);
    SetSubMesh: ((index: number, desc: UnityEngine.Rendering.SubMeshDescriptor, flags?: UnityEngine.Rendering.MeshUpdateFlags) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Mesh_MeshDataArray {
    Length: number;
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Renderer {
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Projector {
    isOrthoGraphic: boolean;
    orthoGraphicSize: number;
    nearClipPlane: number;
    farClipPlane: number;
    fieldOfView: number;
    aspectRatio: number;
    orthographic: boolean;
    orthographicSize: number;
    ignoreLayers: number;
    material: UnityEngine.Material;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Shader {
    maximumLOD: number;
    isSupported: boolean;
    renderQueue: number;
    passCount: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetDependency: ((name: string) => UnityEngine.Shader);
    FindPassTagValue: ((passIndex: number, tagName: UnityEngine.Rendering.ShaderTagId) => UnityEngine.Rendering.ShaderTagId);
    GetPropertyCount: (() => number);
    FindPropertyIndex: ((propertyName: string) => number);
    GetPropertyName: ((propertyIndex: number) => string);
    GetPropertyNameId: ((propertyIndex: number) => number);
    GetPropertyType: ((propertyIndex: number) => UnityEngine.Rendering.ShaderPropertyType);
    GetPropertyDescription: ((propertyIndex: number) => string);
    GetPropertyFlags: ((propertyIndex: number) => UnityEngine.Rendering.ShaderPropertyFlags);
    GetPropertyAttributes: ((propertyIndex: number) => any);
    GetPropertyDefaultFloatValue: ((propertyIndex: number) => number);
    GetPropertyDefaultVectorValue: ((propertyIndex: number) => UnityEngine.Vector4);
    GetPropertyRangeLimits: ((propertyIndex: number) => UnityEngine.Vector2);
    GetPropertyTextureDimension: ((propertyIndex: number) => UnityEngine.Rendering.TextureDimension);
    GetPropertyTextureDefaultName: ((propertyIndex: number) => string);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LightmapsModeLegacy {
    Single = 0,
    Dual = 1,
    Directional = 2,
  }
  export interface TrailRenderer {
    numPositions: number;
    time: number;
    startWidth: number;
    endWidth: number;
    widthMultiplier: number;
    autodestruct: boolean;
    emitting: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    minVertexDistance: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    positionCount: number;
    shadowBias: number;
    generateLightingData: boolean;
    textureMode: UnityEngine.LineTextureMode;
    alignment: UnityEngine.LineAlignment;
    widthCurve: UnityEngine.AnimationCurve;
    colorGradient: UnityEngine.Gradient;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetPosition: ((index: number, position: UnityEngine.Vector3) => void);
    GetPosition: ((index: number) => UnityEngine.Vector3);
    Clear: (() => void);
    BakeMesh: ((mesh: UnityEngine.Mesh, useTransform?: boolean) => void) | ((mesh: UnityEngine.Mesh, camera: UnityEngine.Camera, useTransform?: boolean) => void);
    GetPositions: ((positions: UnityEngine.Vector3[]) => number) | ((positions: any) => number) | ((positions: any) => number);
    SetPositions: ((positions: UnityEngine.Vector3[]) => void) | ((positions: any) => void) | ((positions: any) => void);
    AddPosition: ((position: UnityEngine.Vector3) => void);
    AddPositions: ((positions: UnityEngine.Vector3[]) => void) | ((positions: any) => void) | ((positions: any) => void);
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LineRenderer {
    numPositions: number;
    startWidth: number;
    endWidth: number;
    widthMultiplier: number;
    numCornerVertices: number;
    numCapVertices: number;
    useWorldSpace: boolean;
    loop: boolean;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    positionCount: number;
    shadowBias: number;
    generateLightingData: boolean;
    textureMode: UnityEngine.LineTextureMode;
    alignment: UnityEngine.LineAlignment;
    widthCurve: UnityEngine.AnimationCurve;
    colorGradient: UnityEngine.Gradient;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetWidth: ((start: number, end: number) => void);
    SetColors: ((start: UnityEngine.Color, end: UnityEngine.Color) => void);
    SetVertexCount: ((count: number) => void);
    SetPosition: ((index: number, position: UnityEngine.Vector3) => void);
    GetPosition: ((index: number) => UnityEngine.Vector3);
    Simplify: ((tolerance: number) => void);
    BakeMesh: ((mesh: UnityEngine.Mesh, useTransform?: boolean) => void) | ((mesh: UnityEngine.Mesh, camera: UnityEngine.Camera, useTransform?: boolean) => void);
    GetPositions: ((positions: UnityEngine.Vector3[]) => number) | ((positions: any) => number) | ((positions: any) => number);
    SetPositions: ((positions: UnityEngine.Vector3[]) => void) | ((positions: any) => void) | ((positions: any) => void);
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface MaterialPropertyBlock {
    isEmpty: boolean;
    AddFloat: ((name: string, value: number) => void) | ((nameID: number, value: number) => void);
    AddVector: ((name: string, value: UnityEngine.Vector4) => void) | ((nameID: number, value: UnityEngine.Vector4) => void);
    AddColor: ((name: string, value: UnityEngine.Color) => void) | ((nameID: number, value: UnityEngine.Color) => void);
    AddMatrix: ((name: string, value: UnityEngine.Matrix4x4) => void) | ((nameID: number, value: UnityEngine.Matrix4x4) => void);
    AddTexture: ((name: string, value: UnityEngine.Texture) => void) | ((nameID: number, value: UnityEngine.Texture) => void);
    Clear: (() => void);
    SetFloat: ((name: string, value: number) => void) | ((nameID: number, value: number) => void);
    SetInt: ((name: string, value: number) => void) | ((nameID: number, value: number) => void);
    SetVector: ((name: string, value: UnityEngine.Vector4) => void) | ((nameID: number, value: UnityEngine.Vector4) => void);
    SetColor: ((name: string, value: UnityEngine.Color) => void) | ((nameID: number, value: UnityEngine.Color) => void);
    SetMatrix: ((name: string, value: UnityEngine.Matrix4x4) => void) | ((nameID: number, value: UnityEngine.Matrix4x4) => void);
    SetBuffer: ((name: string, value: UnityEngine.ComputeBuffer) => void) | ((nameID: number, value: UnityEngine.ComputeBuffer) => void) | ((name: string, value: UnityEngine.GraphicsBuffer) => void) | ((nameID: number, value: UnityEngine.GraphicsBuffer) => void);
    SetTexture: ((name: string, value: UnityEngine.Texture) => void) | ((nameID: number, value: UnityEngine.Texture) => void) | ((name: string, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement) => void) | ((nameID: number, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement) => void);
    SetConstantBuffer: ((name: string, value: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((nameID: number, value: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((name: string, value: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((nameID: number, value: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
    SetFloatArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    SetVectorArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: UnityEngine.Vector4[]) => void) | ((nameID: number, values: UnityEngine.Vector4[]) => void);
    SetMatrixArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: UnityEngine.Matrix4x4[]) => void) | ((nameID: number, values: UnityEngine.Matrix4x4[]) => void);
    GetFloat: ((name: string) => number) | ((nameID: number) => number);
    GetInt: ((name: string) => number) | ((nameID: number) => number);
    GetVector: ((name: string) => UnityEngine.Vector4) | ((nameID: number) => UnityEngine.Vector4);
    GetColor: ((name: string) => UnityEngine.Color) | ((nameID: number) => UnityEngine.Color);
    GetMatrix: ((name: string) => UnityEngine.Matrix4x4) | ((nameID: number) => UnityEngine.Matrix4x4);
    GetTexture: ((name: string) => UnityEngine.Texture) | ((nameID: number) => UnityEngine.Texture);
    GetFloatArray: ((name: string) => any) | ((nameID: number) => any) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    GetVectorArray: ((name: string) => UnityEngine.Vector4[]) | ((nameID: number) => UnityEngine.Vector4[]) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    GetMatrixArray: ((name: string) => UnityEngine.Matrix4x4[]) | ((nameID: number) => UnityEngine.Matrix4x4[]) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    CopySHCoefficientArraysFrom: ((lightProbes: any) => void) | ((lightProbes: UnityEngine.Rendering.SphericalHarmonicsL2[]) => void) | ((lightProbes: any, sourceStart: number, destStart: number, count: number) => void) | ((lightProbes: UnityEngine.Rendering.SphericalHarmonicsL2[], sourceStart: number, destStart: number, count: number) => void);
    CopyProbeOcclusionArrayFrom: ((occlusionProbes: any) => void) | ((occlusionProbes: UnityEngine.Vector4[]) => void) | ((occlusionProbes: any, sourceStart: number, destStart: number, count: number) => void) | ((occlusionProbes: UnityEngine.Vector4[], sourceStart: number, destStart: number, count: number) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface RenderSettings {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Material {
    shader: UnityEngine.Shader;
    color: UnityEngine.Color;
    mainTexture: UnityEngine.Texture;
    mainTextureOffset: UnityEngine.Vector2;
    mainTextureScale: UnityEngine.Vector2;
    renderQueue: number;
    globalIlluminationFlags: UnityEngine.MaterialGlobalIlluminationFlags;
    doubleSidedGI: boolean;
    enableInstancing: boolean;
    passCount: number;
    shaderKeywords: any; // System.String[]
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasProperty: ((nameID: number) => boolean) | ((name: string) => boolean);
    EnableKeyword: ((keyword: string) => void);
    DisableKeyword: ((keyword: string) => void);
    IsKeywordEnabled: ((keyword: string) => boolean);
    SetShaderPassEnabled: ((passName: string, enabled: boolean) => void);
    GetShaderPassEnabled: ((passName: string) => boolean);
    GetPassName: ((pass: number) => string);
    FindPass: ((passName: string) => number);
    SetOverrideTag: ((tag: string, val: string) => void);
    GetTag: ((tag: string, searchFallbacks: boolean, defaultValue: string) => string) | ((tag: string, searchFallbacks: boolean) => string);
    Lerp: ((start: UnityEngine.Material, end: UnityEngine.Material, t: number) => void);
    SetPass: ((pass: number) => boolean);
    CopyPropertiesFromMaterial: ((mat: UnityEngine.Material) => void);
    ComputeCRC: (() => number);
    GetTexturePropertyNames: (() => any) | ((outNames: any) => void);
    GetTexturePropertyNameIDs: (() => any) | ((outNames: any) => void);
    SetFloat: ((name: string, value: number) => void) | ((nameID: number, value: number) => void);
    SetInt: ((name: string, value: number) => void) | ((nameID: number, value: number) => void);
    SetColor: ((name: string, value: UnityEngine.Color) => void) | ((nameID: number, value: UnityEngine.Color) => void);
    SetVector: ((name: string, value: UnityEngine.Vector4) => void) | ((nameID: number, value: UnityEngine.Vector4) => void);
    SetMatrix: ((name: string, value: UnityEngine.Matrix4x4) => void) | ((nameID: number, value: UnityEngine.Matrix4x4) => void);
    SetTexture: ((name: string, value: UnityEngine.Texture) => void) | ((nameID: number, value: UnityEngine.Texture) => void) | ((name: string, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement) => void) | ((nameID: number, value: UnityEngine.RenderTexture, element: UnityEngine.Rendering.RenderTextureSubElement) => void);
    SetBuffer: ((name: string, value: UnityEngine.ComputeBuffer) => void) | ((nameID: number, value: UnityEngine.ComputeBuffer) => void) | ((name: string, value: UnityEngine.GraphicsBuffer) => void) | ((nameID: number, value: UnityEngine.GraphicsBuffer) => void);
    SetConstantBuffer: ((name: string, value: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((nameID: number, value: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((name: string, value: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((nameID: number, value: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
    SetFloatArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    SetColorArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: UnityEngine.Color[]) => void) | ((nameID: number, values: UnityEngine.Color[]) => void);
    SetVectorArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: UnityEngine.Vector4[]) => void) | ((nameID: number, values: UnityEngine.Vector4[]) => void);
    SetMatrixArray: ((name: string, values: any) => void) | ((nameID: number, values: any) => void) | ((name: string, values: UnityEngine.Matrix4x4[]) => void) | ((nameID: number, values: UnityEngine.Matrix4x4[]) => void);
    GetFloat: ((name: string) => number) | ((nameID: number) => number);
    GetInt: ((name: string) => number) | ((nameID: number) => number);
    GetColor: ((name: string) => UnityEngine.Color) | ((nameID: number) => UnityEngine.Color);
    GetVector: ((name: string) => UnityEngine.Vector4) | ((nameID: number) => UnityEngine.Vector4);
    GetMatrix: ((name: string) => UnityEngine.Matrix4x4) | ((nameID: number) => UnityEngine.Matrix4x4);
    GetTexture: ((name: string) => UnityEngine.Texture) | ((nameID: number) => UnityEngine.Texture);
    GetFloatArray: ((name: string) => any) | ((nameID: number) => any) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    GetColorArray: ((name: string) => UnityEngine.Color[]) | ((nameID: number) => UnityEngine.Color[]) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    GetVectorArray: ((name: string) => UnityEngine.Vector4[]) | ((nameID: number) => UnityEngine.Vector4[]) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    GetMatrixArray: ((name: string) => UnityEngine.Matrix4x4[]) | ((nameID: number) => UnityEngine.Matrix4x4[]) | ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    SetTextureOffset: ((name: string, value: UnityEngine.Vector2) => void) | ((nameID: number, value: UnityEngine.Vector2) => void);
    SetTextureScale: ((name: string, value: UnityEngine.Vector2) => void) | ((nameID: number, value: UnityEngine.Vector2) => void);
    GetTextureOffset: ((name: string) => UnityEngine.Vector2) | ((nameID: number) => UnityEngine.Vector2);
    GetTextureScale: ((name: string) => UnityEngine.Vector2) | ((nameID: number) => UnityEngine.Vector2);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface GraphicsBuffer {
    count: number;
    stride: number;
    Dispose: (() => void);
    Release: (() => void);
    IsValid: (() => boolean);
    SetData: ((data: any) => void) | ((data: any, managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number) => void);
    GetData: ((data: any) => void) | ((data: any, managedBufferStartIndex: number, computeBufferStartIndex: number, count: number) => void);
    GetNativeBufferPtr: (() => any);
    SetCounterValue: ((counterValue: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum GraphicsBuffer_Target {
    Vertex = 1,
    Index = 2,
    Structured = 16,
    Raw = 32,
    Append = 64,
    Counter = 128,
    IndirectArguments = 256,
    Constant = 512,
  }
  export interface OcclusionPortal {
    open: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface OcclusionArea {
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Flare {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LensFlare {
    brightness: number;
    fadeSpeed: number;
    color: UnityEngine.Color;
    flare: UnityEngine.Flare;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LightBakingOutput {
    probeOcclusionLightIndex: number;
    occlusionMaskChannel: number;
    lightmapBakeType: UnityEngine.LightmapBakeType;
    mixedLightingMode: UnityEngine.MixedLightingMode;
    isBaked: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LightShadowCasterMode {
    Default = 0,
    NonLightmappedOnly = 1,
    Everything = 2,
  }
  export interface Light {
    type: UnityEngine.LightType;
    shape: UnityEngine.LightShape;
    spotAngle: number;
    innerSpotAngle: number;
    color: UnityEngine.Color;
    colorTemperature: number;
    useColorTemperature: boolean;
    intensity: number;
    bounceIntensity: number;
    useBoundingSphereOverride: boolean;
    boundingSphereOverride: UnityEngine.Vector4;
    useViewFrustumForShadowCasterCull: boolean;
    shadowCustomResolution: number;
    shadowBias: number;
    shadowNormalBias: number;
    shadowNearPlane: number;
    useShadowMatrixOverride: boolean;
    shadowMatrixOverride: UnityEngine.Matrix4x4;
    range: number;
    flare: UnityEngine.Flare;
    bakingOutput: UnityEngine.LightBakingOutput;
    cullingMask: number;
    renderingLayerMask: number;
    lightShadowCasterMode: UnityEngine.LightShadowCasterMode;
    shadowRadius: number;
    shadowAngle: number;
    shadows: UnityEngine.LightShadows;
    shadowStrength: number;
    shadowResolution: UnityEngine.Rendering.LightShadowResolution;
    shadowSoftness: number;
    shadowSoftnessFade: number;
    layerShadowCullDistances: any; // System.Single[]
    cookieSize: number;
    cookie: UnityEngine.Texture;
    renderMode: UnityEngine.LightRenderMode;
    bakedIndex: number;
    areaSize: UnityEngine.Vector2;
    lightmapBakeType: UnityEngine.LightmapBakeType;
    commandBufferCount: number;
    shadowConstantBias: number;
    shadowObjectSizeBias: number;
    attenuate: boolean;
    lightmappingMode: UnityEngine.LightmappingMode;
    isBaked: boolean;
    alreadyLightmapped: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Reset: (() => void);
    SetLightDirty: (() => void);
    AddCommandBuffer: ((evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer) => void) | ((evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer, shadowPassMask: UnityEngine.Rendering.ShadowMapPass) => void);
    AddCommandBufferAsync: ((evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer, queueType: UnityEngine.Rendering.ComputeQueueType) => void) | ((evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer, shadowPassMask: UnityEngine.Rendering.ShadowMapPass, queueType: UnityEngine.Rendering.ComputeQueueType) => void);
    RemoveCommandBuffer: ((evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer) => void);
    RemoveCommandBuffers: ((evt: UnityEngine.Rendering.LightEvent) => void);
    RemoveAllCommandBuffers: (() => void);
    GetCommandBuffers: ((evt: UnityEngine.Rendering.LightEvent) => UnityEngine.Rendering.CommandBuffer[]);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Skybox {
    material: UnityEngine.Material;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface MeshFilter {
    sharedMesh: UnityEngine.Mesh;
    mesh: UnityEngine.Mesh;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum RenderingPath {
    UsePlayerSettings = -1,
    VertexLit = 0,
    Forward = 1,
    DeferredLighting = 2,
    DeferredShading = 3,
  }
  export enum TransparencySortMode {
    Default = 0,
    Perspective = 1,
    Orthographic = 2,
    CustomAxis = 3,
  }
  export enum StereoTargetEyeMask {
    None = 0,
    Left = 1,
    Right = 2,
    Both = 3,
  }
  export enum CameraType {
    Game = 1,
    SceneView = 2,
    Preview = 4,
    VR = 8,
    Reflection = 16,
  }
  export enum ComputeBufferType {
    Default = 0,
    Raw = 1,
    Append = 2,
    Counter = 4,
    Constant = 8,
    Structured = 16,
    DrawIndirect = 256,
    IndirectArguments = 256,
    GPUMemory = 512,
  }
  export enum LightType {
    Spot = 0,
    Directional = 1,
    Point = 2,
    Area = 3,
    Rectangle = 3,
    Disc = 4,
  }
  export enum LightShape {
    Cone = 0,
    Pyramid = 1,
    Box = 2,
  }
  export enum LightRenderMode {
    Auto = 0,
    ForcePixel = 1,
    ForceVertex = 2,
  }
  export enum LightShadows {
    None = 0,
    Hard = 1,
    Soft = 2,
  }
  export enum FogMode {
    Linear = 1,
    Exponential = 2,
    ExponentialSquared = 3,
  }
  export enum LightmapBakeType {
    Realtime = 4,
    Baked = 2,
    Mixed = 1,
  }
  export enum MixedLightingMode {
    IndirectOnly = 0,
    Shadowmask = 2,
    Subtractive = 1,
  }
  export enum ReceiveGI {
    Lightmaps = 1,
    LightProbes = 2,
  }
  export enum QualityLevel {
    Fastest = 0,
    Fast = 1,
    Simple = 2,
    Good = 3,
    Beautiful = 4,
    Fantastic = 5,
  }
  export enum ShadowProjection {
    CloseFit = 0,
    StableFit = 1,
  }
  export enum ShadowQuality {
    Disable = 0,
    HardOnly = 1,
    All = 2,
  }
  export enum ShadowResolution {
    Low = 0,
    Medium = 1,
    High = 2,
    VeryHigh = 3,
  }
  export enum ShadowmaskMode {
    Shadowmask = 0,
    DistanceShadowmask = 1,
  }
  export enum CameraClearFlags {
    Skybox = 1,
    Color = 2,
    SolidColor = 2,
    Depth = 3,
    Nothing = 4,
  }
  export enum DepthTextureMode {
    None = 0,
    Depth = 1,
    DepthNormals = 2,
    MotionVectors = 4,
  }
  export enum TexGenMode {
    None = 0,
    SphereMap = 1,
    Object = 2,
    EyeLinear = 3,
    CubeReflect = 4,
    CubeNormal = 5,
  }
  export enum AnisotropicFiltering {
    Disable = 0,
    Enable = 1,
    ForceEnable = 2,
  }
  export enum BlendWeights {
    OneBone = 1,
    TwoBones = 2,
    FourBones = 4,
  }
  export enum SkinWeights {
    OneBone = 1,
    TwoBones = 2,
    FourBones = 4,
    Unlimited = 255,
  }
  export enum MeshTopology {
    Triangles = 0,
    Quads = 2,
    Lines = 3,
    LineStrip = 4,
    Points = 5,
  }
  export enum SkinQuality {
    Auto = 0,
    Bone1 = 1,
    Bone2 = 2,
    Bone4 = 4,
  }
  export enum ColorSpace {
    Uninitialized = -1,
    Gamma = 0,
    Linear = 1,
  }
  export enum ColorGamut {
    sRGB = 0,
    Rec709 = 1,
    Rec2020 = 2,
    DisplayP3 = 3,
    HDR10 = 4,
    DolbyHDR = 5,
  }
  export enum ScreenOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    AutoRotation = 5,
    Landscape = 3,
  }
  export enum FilterMode {
    Point = 0,
    Bilinear = 1,
    Trilinear = 2,
  }
  export enum TextureWrapMode {
    Repeat = 0,
    Clamp = 1,
    Mirror = 2,
    MirrorOnce = 3,
  }
  export enum NPOTSupport {
    None = 0,
    Restricted = 1,
    Full = 2,
  }
  export enum TextureFormat {
    Alpha8 = 1,
    ARGB4444 = 2,
    RGB24 = 3,
    RGBA32 = 4,
    ARGB32 = 5,
    RGB565 = 7,
    R16 = 9,
    DXT1 = 10,
    DXT5 = 12,
    RGBA4444 = 13,
    BGRA32 = 14,
    RHalf = 15,
    RGHalf = 16,
    RGBAHalf = 17,
    RFloat = 18,
    RGFloat = 19,
    RGBAFloat = 20,
    YUY2 = 21,
    RGB9e5Float = 22,
    BC4 = 26,
    BC5 = 27,
    BC6H = 24,
    BC7 = 25,
    DXT1Crunched = 28,
    DXT5Crunched = 29,
    PVRTC_RGB2 = 30,
    PVRTC_RGBA2 = 31,
    PVRTC_RGB4 = 32,
    PVRTC_RGBA4 = 33,
    ETC_RGB4 = 34,
    ATC_RGB4 = -127,
    ATC_RGBA8 = -127,
    EAC_R = 41,
    EAC_R_SIGNED = 42,
    EAC_RG = 43,
    EAC_RG_SIGNED = 44,
    ETC2_RGB = 45,
    ETC2_RGBA1 = 46,
    ETC2_RGBA8 = 47,
    ASTC_4x4 = 48,
    ASTC_5x5 = 49,
    ASTC_6x6 = 50,
    ASTC_8x8 = 51,
    ASTC_10x10 = 52,
    ASTC_12x12 = 53,
    ETC_RGB4_3DS = 60,
    ETC_RGBA8_3DS = 61,
    RG16 = 62,
    R8 = 63,
    ETC_RGB4Crunched = 64,
    ETC2_RGBA8Crunched = 65,
    ASTC_HDR_4x4 = 66,
    ASTC_HDR_5x5 = 67,
    ASTC_HDR_6x6 = 68,
    ASTC_HDR_8x8 = 69,
    ASTC_HDR_10x10 = 70,
    ASTC_HDR_12x12 = 71,
    RG32 = 72,
    RGB48 = 73,
    RGBA64 = 74,
    ASTC_RGB_4x4 = 48,
    ASTC_RGB_5x5 = 49,
    ASTC_RGB_6x6 = 50,
    ASTC_RGB_8x8 = 51,
    ASTC_RGB_10x10 = 52,
    ASTC_RGB_12x12 = 53,
    ASTC_RGBA_4x4 = 54,
    ASTC_RGBA_5x5 = 55,
    ASTC_RGBA_6x6 = 56,
    ASTC_RGBA_8x8 = 57,
    ASTC_RGBA_10x10 = 58,
    ASTC_RGBA_12x12 = 59,
    PVRTC_2BPP_RGB = -127,
    PVRTC_2BPP_RGBA = -127,
    PVRTC_4BPP_RGB = -127,
    PVRTC_4BPP_RGBA = -127,
  }
  export enum CubemapFace {
    Unknown = -1,
    PositiveX = 0,
    NegativeX = 1,
    PositiveY = 2,
    NegativeY = 3,
    PositiveZ = 4,
    NegativeZ = 5,
  }
  export enum RenderTextureFormat {
    ARGB32 = 0,
    Depth = 1,
    ARGBHalf = 2,
    Shadowmap = 3,
    RGB565 = 4,
    ARGB4444 = 5,
    ARGB1555 = 6,
    Default = 7,
    ARGB2101010 = 8,
    DefaultHDR = 9,
    ARGB64 = 10,
    ARGBFloat = 11,
    RGFloat = 12,
    RGHalf = 13,
    RFloat = 14,
    RHalf = 15,
    R8 = 16,
    ARGBInt = 17,
    RGInt = 18,
    RInt = 19,
    BGRA32 = 20,
    RGB111110Float = 22,
    RG32 = 23,
    RGBAUShort = 24,
    RG16 = 25,
    BGRA10101010_XR = 26,
    BGR101010_XR = 27,
    R16 = 28,
  }
  export enum VRTextureUsage {
    None = 0,
    OneEye = 1,
    TwoEyes = 2,
    DeviceSpecific = 3,
  }
  export enum RenderTextureCreationFlags {
    MipMap = 1,
    AutoGenerateMips = 2,
    SRGB = 4,
    EyeTexture = 8,
    EnableRandomWrite = 16,
    CreatedFromScript = 32,
    AllowVerticalFlip = 128,
    NoResolvedColorSurface = 256,
    DynamicallyScalable = 1024,
    BindMS = 2048,
  }
  export enum RenderTextureReadWrite {
    Default = 0,
    Linear = 1,
    sRGB = 2,
  }
  export enum RenderTextureMemoryless {
    None = 0,
    Color = 1,
    Depth = 2,
    MSAA = 4,
  }
  export enum HDRDisplaySupportFlags {
    None = 0,
    Supported = 1,
    RuntimeSwitchable = 2,
    AutomaticTonemapping = 4,
  }
  export enum LightmapsMode {
    NonDirectional = 0,
    CombinedDirectional = 1,
    SeparateDirectional = 2,
    Single = 0,
    Dual = 1,
    Directional = 2,
  }
  export enum MaterialGlobalIlluminationFlags {
    None = 0,
    RealtimeEmissive = 1,
    BakedEmissive = 2,
    EmissiveIsBlack = 4,
    AnyEmissive = 3,
  }
  export interface LightProbeProxyVolume {
    boundsGlobal: UnityEngine.Bounds;
    sizeCustom: UnityEngine.Vector3;
    originCustom: UnityEngine.Vector3;
    probeDensity: number;
    gridResolutionX: number;
    gridResolutionY: number;
    gridResolutionZ: number;
    boundingBoxMode: UnityEngine.LightProbeProxyVolume_BoundingBoxMode;
    resolutionMode: UnityEngine.LightProbeProxyVolume_ResolutionMode;
    probePositionMode: UnityEngine.LightProbeProxyVolume_ProbePositionMode;
    refreshMode: UnityEngine.LightProbeProxyVolume_RefreshMode;
    qualityMode: UnityEngine.LightProbeProxyVolume_QualityMode;
    dataFormat: UnityEngine.LightProbeProxyVolume_DataFormat;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Update: (() => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LightProbeProxyVolume_ResolutionMode {
    Automatic = 0,
    Custom = 1,
  }
  export enum LightProbeProxyVolume_BoundingBoxMode {
    AutomaticLocal = 0,
    AutomaticWorld = 1,
    Custom = 2,
  }
  export enum LightProbeProxyVolume_ProbePositionMode {
    CellCorner = 0,
    CellCenter = 1,
  }
  export enum LightProbeProxyVolume_RefreshMode {
    Automatic = 0,
    EveryFrame = 1,
    ViaScripting = 2,
  }
  export enum LightProbeProxyVolume_QualityMode {
    Low = 0,
    Normal = 1,
  }
  export enum LightProbeProxyVolume_DataFormat {
    HalfFloat = 0,
    Float = 1,
  }
  export enum CustomRenderTextureInitializationSource {
    TextureAndColor = 0,
    Material = 1,
  }
  export enum CustomRenderTextureUpdateMode {
    OnLoad = 0,
    Realtime = 1,
    OnDemand = 2,
  }
  export enum CustomRenderTextureUpdateZoneSpace {
    Normalized = 0,
    Pixel = 1,
  }
  export enum MotionVectorGenerationMode {
    Camera = 0,
    Object = 1,
    ForceNoMotion = 2,
  }
  export enum LineTextureMode {
    Stretch = 0,
    Tile = 1,
    DistributePerSegment = 2,
    RepeatPerSegment = 3,
  }
  export enum LineAlignment {
    View = 0,
    Local = 1,
    TransformZ = 1,
  }
  export interface SkinnedMeshRenderer {
    quality: UnityEngine.SkinQuality;
    updateWhenOffscreen: boolean;
    forceMatrixRecalculationPerRender: boolean;
    rootBone: UnityEngine.Transform;
    bones: UnityEngine.Transform[];
    sharedMesh: UnityEngine.Mesh;
    skinnedMotionVectors: boolean;
    localBounds: UnityEngine.Bounds;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetBlendShapeWeight: ((index: number) => number);
    SetBlendShapeWeight: ((index: number, value: number) => void);
    BakeMesh: ((mesh: UnityEngine.Mesh) => void) | ((mesh: UnityEngine.Mesh, useScale: boolean) => void);
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface MeshRenderer {
    additionalVertexStreams: UnityEngine.Mesh;
    enlightenVertexStream: UnityEngine.Mesh;
    subMeshStartIndex: number;
    scaleInLightmap: number;
    receiveGI: UnityEngine.ReceiveGI;
    stitchLightmapSeams: boolean;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LightmappingMode {
    Realtime = 4,
    Baked = 2,
    Mixed = 1,
  }
  export interface LightProbeGroup {
    probePositions: UnityEngine.Vector3[];
    dering: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LineUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum LODFadeMode {
    None = 0,
    CrossFade = 1,
    SpeedTree = 2,
  }
  export interface LOD {
    screenRelativeTransitionHeight: number;
    fadeTransitionWidth: number;
    renderers: UnityEngine.Renderer[];
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LODGroup {
    localReferencePoint: UnityEngine.Vector3;
    size: number;
    lodCount: number;
    fadeMode: UnityEngine.LODFadeMode;
    animateCrossFading: boolean;
    enabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    RecalculateBounds: (() => void);
    GetLODs: (() => UnityEngine.LOD[]);
    SetLODS: ((lods: UnityEngine.LOD[]) => void);
    SetLODs: ((lods: UnityEngine.LOD[]) => void);
    ForceLOD: ((index: number) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface BoneWeight {
    weight0: number;
    weight1: number;
    weight2: number;
    weight3: number;
    boneIndex0: number;
    boneIndex1: number;
    boneIndex2: number;
    boneIndex3: number;
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.BoneWeight) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface BoneWeight1 {
    weight: number;
    boneIndex: number;
    Equals: ((other: any) => boolean) | ((other: UnityEngine.BoneWeight1) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CombineInstance {
    mesh: UnityEngine.Mesh;
    subMeshIndex: number;
    transform: UnityEngine.Matrix4x4;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Texture {
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Texture2D {
    format: UnityEngine.TextureFormat;
    isReadable: boolean;
    vtOnly: boolean;
    streamingMipmaps: boolean;
    streamingMipmapsPriority: number;
    requestedMipmapLevel: number;
    minimumMipmapLevel: number;
    calculatedMipmapLevel: number;
    desiredMipmapLevel: number;
    loadingMipmapLevel: number;
    loadedMipmapLevel: number;
    alphaIsTransparency: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Compress: ((highQuality: boolean) => void);
    ClearRequestedMipmapLevel: (() => void);
    IsRequestedMipmapLevelLoaded: (() => boolean);
    ClearMinimumMipmapLevel: (() => void);
    UpdateExternalTexture: ((nativeTex: any) => void);
    GetRawTextureData: (() => any);
    GetPixels: ((x: number, y: number, blockWidth: number, blockHeight: number, miplevel: number) => UnityEngine.Color[]) | ((x: number, y: number, blockWidth: number, blockHeight: number) => UnityEngine.Color[]) | ((miplevel: number) => UnityEngine.Color[]) | (() => UnityEngine.Color[]);
    GetPixels32: ((miplevel: number) => UnityEngine.Color32[]) | (() => UnityEngine.Color32[]);
    PackTextures: ((textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number, makeNoLongerReadable: boolean) => UnityEngine.Rect[]) | ((textures: UnityEngine.Texture2D[], padding: number, maximumAtlasSize: number) => UnityEngine.Rect[]) | ((textures: UnityEngine.Texture2D[], padding: number) => UnityEngine.Rect[]);
    SetPixel: ((x: number, y: number, color: UnityEngine.Color) => void) | ((x: number, y: number, color: UnityEngine.Color, mipLevel: number) => void);
    SetPixels: ((x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[], miplevel: number) => void) | ((x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color[]) => void) | ((colors: UnityEngine.Color[], miplevel: number) => void) | ((colors: UnityEngine.Color[]) => void);
    GetPixel: ((x: number, y: number) => UnityEngine.Color) | ((x: number, y: number, mipLevel: number) => UnityEngine.Color);
    GetPixelBilinear: ((u: number, v: number) => UnityEngine.Color) | ((u: number, v: number, mipLevel: number) => UnityEngine.Color);
    LoadRawTextureData: ((data: any, size: number) => void) | ((data: any) => void);
    Apply: ((updateMipmaps: boolean, makeNoLongerReadable: boolean) => void) | ((updateMipmaps: boolean) => void) | (() => void);
    Resize: ((width: number, height: number) => boolean) | ((width: number, height: number, format: UnityEngine.TextureFormat, hasMipMap: boolean) => boolean) | ((width: number, height: number, format: UnityEngine.Experimental.Rendering.GraphicsFormat, hasMipMap: boolean) => boolean);
    ReadPixels: ((source: UnityEngine.Rect, destX: number, destY: number, recalculateMipMaps: boolean) => void) | ((source: UnityEngine.Rect, destX: number, destY: number) => void);
    SetPixels32: ((colors: UnityEngine.Color32[], miplevel: number) => void) | ((colors: UnityEngine.Color32[]) => void) | ((x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[], miplevel: number) => void) | ((x: number, y: number, blockWidth: number, blockHeight: number, colors: UnityEngine.Color32[]) => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum Texture2D_EXRFlags {
    None = 0,
    OutputAsFloat = 1,
    CompressZIP = 2,
    CompressRLE = 4,
    CompressPIZ = 8,
  }
  export interface Cubemap {
    format: UnityEngine.TextureFormat;
    isReadable: boolean;
    streamingMipmaps: boolean;
    streamingMipmapsPriority: number;
    requestedMipmapLevel: number;
    desiredMipmapLevel: number;
    loadingMipmapLevel: number;
    loadedMipmapLevel: number;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    UpdateExternalTexture: ((nativeTexture: any) => void);
    SmoothEdges: ((smoothRegionWidthInPixels: number) => void) | (() => void);
    GetPixels: ((face: UnityEngine.CubemapFace, miplevel: number) => UnityEngine.Color[]) | ((face: UnityEngine.CubemapFace) => UnityEngine.Color[]);
    SetPixels: ((colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, miplevel: number) => void) | ((colors: UnityEngine.Color[], face: UnityEngine.CubemapFace) => void);
    ClearRequestedMipmapLevel: (() => void);
    IsRequestedMipmapLevelLoaded: (() => boolean);
    SetPixel: ((face: UnityEngine.CubemapFace, x: number, y: number, color: UnityEngine.Color) => void);
    GetPixel: ((face: UnityEngine.CubemapFace, x: number, y: number) => UnityEngine.Color);
    Apply: ((updateMipmaps: boolean, makeNoLongerReadable: boolean) => void) | ((updateMipmaps: boolean) => void) | (() => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Texture3D {
    depth: number;
    format: UnityEngine.TextureFormat;
    isReadable: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    UpdateExternalTexture: ((nativeTex: any) => void);
    GetPixels: ((miplevel: number) => UnityEngine.Color[]) | (() => UnityEngine.Color[]);
    GetPixels32: ((miplevel: number) => UnityEngine.Color32[]) | (() => UnityEngine.Color32[]);
    SetPixels: ((colors: UnityEngine.Color[], miplevel: number) => void) | ((colors: UnityEngine.Color[]) => void);
    SetPixels32: ((colors: UnityEngine.Color32[], miplevel: number) => void) | ((colors: UnityEngine.Color32[]) => void);
    Apply: ((updateMipmaps: boolean, makeNoLongerReadable: boolean) => void) | ((updateMipmaps: boolean) => void) | (() => void);
    SetPixel: ((x: number, y: number, z: number, color: UnityEngine.Color) => void) | ((x: number, y: number, z: number, color: UnityEngine.Color, mipLevel: number) => void);
    GetPixel: ((x: number, y: number, z: number) => UnityEngine.Color) | ((x: number, y: number, z: number, mipLevel: number) => UnityEngine.Color);
    GetPixelBilinear: ((u: number, v: number, w: number) => UnityEngine.Color) | ((u: number, v: number, w: number, mipLevel: number) => UnityEngine.Color);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Texture2DArray {
    depth: number;
    format: UnityEngine.TextureFormat;
    isReadable: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetPixels: ((arrayElement: number, miplevel: number) => UnityEngine.Color[]) | ((arrayElement: number) => UnityEngine.Color[]);
    GetPixels32: ((arrayElement: number, miplevel: number) => UnityEngine.Color32[]) | ((arrayElement: number) => UnityEngine.Color32[]);
    SetPixels: ((colors: UnityEngine.Color[], arrayElement: number, miplevel: number) => void) | ((colors: UnityEngine.Color[], arrayElement: number) => void);
    SetPixels32: ((colors: UnityEngine.Color32[], arrayElement: number, miplevel: number) => void) | ((colors: UnityEngine.Color32[], arrayElement: number) => void);
    Apply: ((updateMipmaps: boolean, makeNoLongerReadable: boolean) => void) | ((updateMipmaps: boolean) => void) | (() => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CubemapArray {
    cubemapCount: number;
    format: UnityEngine.TextureFormat;
    isReadable: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetPixels: ((face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number) => UnityEngine.Color[]) | ((face: UnityEngine.CubemapFace, arrayElement: number) => UnityEngine.Color[]);
    GetPixels32: ((face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number) => UnityEngine.Color32[]) | ((face: UnityEngine.CubemapFace, arrayElement: number) => UnityEngine.Color32[]);
    SetPixels: ((colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number) => void) | ((colors: UnityEngine.Color[], face: UnityEngine.CubemapFace, arrayElement: number) => void);
    SetPixels32: ((colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number, miplevel: number) => void) | ((colors: UnityEngine.Color32[], face: UnityEngine.CubemapFace, arrayElement: number) => void);
    Apply: ((updateMipmaps: boolean, makeNoLongerReadable: boolean) => void) | ((updateMipmaps: boolean) => void) | (() => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface SparseTexture {
    tileWidth: number;
    tileHeight: number;
    isCreated: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    UpdateTile: ((tileX: number, tileY: number, miplevel: number, data: UnityEngine.Color32[]) => void);
    UpdateTileRaw: ((tileX: number, tileY: number, miplevel: number, data: any) => void);
    UnloadTile: ((tileX: number, tileY: number, miplevel: number) => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RenderTexture {
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    useMipMap: boolean;
    sRGB: boolean;
    vrUsage: UnityEngine.VRTextureUsage;
    memorylessMode: UnityEngine.RenderTextureMemoryless;
    format: UnityEngine.RenderTextureFormat;
    stencilFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    autoGenerateMips: boolean;
    volumeDepth: number;
    antiAliasing: number;
    bindTextureMS: boolean;
    enableRandomWrite: boolean;
    useDynamicScale: boolean;
    isPowerOfTwo: boolean;
    colorBuffer: UnityEngine.RenderBuffer;
    depthBuffer: UnityEngine.RenderBuffer;
    depth: number;
    descriptor: UnityEngine.RenderTextureDescriptor;
    generateMips: boolean;
    isCubemap: boolean;
    isVolume: boolean;
    mipmapCount: number;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetNativeDepthBufferPtr: (() => any);
    DiscardContents: ((discardColor: boolean, discardDepth: boolean) => void) | (() => void);
    MarkRestoreExpected: (() => void);
    ResolveAntiAliasedSurface: (() => void) | ((target: UnityEngine.RenderTexture) => void);
    SetGlobalShaderProperty: ((propertyName: string) => void);
    Create: (() => boolean);
    Release: (() => void);
    IsCreated: (() => boolean);
    GenerateMips: (() => void);
    ConvertToEquirect: ((equirect: UnityEngine.RenderTexture, eye?: UnityEngine.Camera_MonoOrStereoscopicEye) => void);
    SetBorderColor: ((color: UnityEngine.Color) => void);
    GetTexelOffset: (() => UnityEngine.Vector2);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CustomRenderTextureUpdateZone {
    updateZoneCenter: UnityEngine.Vector3;
    updateZoneSize: UnityEngine.Vector3;
    rotation: number;
    passIndex: number;
    needSwap: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CustomRenderTexture {
    material: UnityEngine.Material;
    initializationMaterial: UnityEngine.Material;
    initializationTexture: UnityEngine.Texture;
    initializationSource: UnityEngine.CustomRenderTextureInitializationSource;
    initializationColor: UnityEngine.Color;
    updateMode: UnityEngine.CustomRenderTextureUpdateMode;
    initializationMode: UnityEngine.CustomRenderTextureUpdateMode;
    updateZoneSpace: UnityEngine.CustomRenderTextureUpdateZoneSpace;
    shaderPass: number;
    cubemapFaceMask: any; // System.UInt32
    doubleBuffered: boolean;
    wrapUpdateZones: boolean;
    updatePeriod: number;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    useMipMap: boolean;
    sRGB: boolean;
    vrUsage: UnityEngine.VRTextureUsage;
    memorylessMode: UnityEngine.RenderTextureMemoryless;
    format: UnityEngine.RenderTextureFormat;
    stencilFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    autoGenerateMips: boolean;
    volumeDepth: number;
    antiAliasing: number;
    bindTextureMS: boolean;
    enableRandomWrite: boolean;
    useDynamicScale: boolean;
    isPowerOfTwo: boolean;
    colorBuffer: UnityEngine.RenderBuffer;
    depthBuffer: UnityEngine.RenderBuffer;
    depth: number;
    descriptor: UnityEngine.RenderTextureDescriptor;
    generateMips: boolean;
    isCubemap: boolean;
    isVolume: boolean;
    mipmapCount: number;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Update: ((count: number) => void) | (() => void);
    Initialize: (() => void);
    ClearUpdateZones: (() => void);
    GetUpdateZones: ((updateZones: any) => void);
    GetDoubleBufferRenderTexture: (() => UnityEngine.RenderTexture);
    EnsureDoubleBufferConsistency: (() => void);
    SetUpdateZones: ((updateZones: UnityEngine.CustomRenderTextureUpdateZone[]) => void);
    GetNativeDepthBufferPtr: (() => any);
    DiscardContents: ((discardColor: boolean, discardDepth: boolean) => void) | (() => void);
    MarkRestoreExpected: (() => void);
    ResolveAntiAliasedSurface: (() => void) | ((target: UnityEngine.RenderTexture) => void);
    SetGlobalShaderProperty: ((propertyName: string) => void);
    Create: (() => boolean);
    Release: (() => void);
    IsCreated: (() => boolean);
    GenerateMips: (() => void);
    ConvertToEquirect: ((equirect: UnityEngine.RenderTexture, eye?: UnityEngine.Camera_MonoOrStereoscopicEye) => void);
    SetBorderColor: ((color: UnityEngine.Color) => void);
    GetTexelOffset: (() => UnityEngine.Vector2);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RenderTextureDescriptor {
    width: number;
    height: number;
    msaaSamples: number;
    volumeDepth: number;
    mipCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    stencilFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    colorFormat: UnityEngine.RenderTextureFormat;
    sRGB: boolean;
    depthBufferBits: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    shadowSamplingMode: UnityEngine.Rendering.ShadowSamplingMode;
    vrUsage: UnityEngine.VRTextureUsage;
    flags: UnityEngine.RenderTextureCreationFlags;
    memoryless: UnityEngine.RenderTextureMemoryless;
    useMipMap: boolean;
    autoGenerateMips: boolean;
    enableRandomWrite: boolean;
    bindMS: boolean;
    useDynamicScale: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum FullScreenMovieControlMode {
    Full = 0,
    Minimal = 1,
    CancelOnInput = 2,
    Hidden = 3,
  }
  export enum FullScreenMovieScalingMode {
    None = 0,
    AspectFit = 1,
    AspectFill = 2,
    Fill = 3,
  }
  export enum AndroidActivityIndicatorStyle {
    DontShow = -1,
    Large = 0,
    InversedLarge = 1,
    Small = 2,
    InversedSmall = 3,
  }
  export interface Handheld {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Hash128 {
    isValid: boolean;
    CompareTo: ((rhs: UnityEngine.Hash128) => number) | ((obj: any) => number);
    ToString: (() => string);
    Append: ((data: string) => void) | ((val: number) => void) | ((val: number) => void);
    Equals: ((obj: any) => boolean) | ((obj: UnityEngine.Hash128) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface HashUtilities {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface HashUnsafeUtilities {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum CursorMode {
    Auto = 0,
    ForceSoftware = 1,
  }
  export enum CursorLockMode {
    None = 0,
    Locked = 1,
    Confined = 2,
  }
  export interface Cursor {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum KeyCode {
    None = 0,
    Backspace = 8,
    Delete = 127,
    Tab = 9,
    Clear = 12,
    Return = 13,
    Pause = 19,
    Escape = 27,
    Space = 32,
    Keypad0 = 256,
    Keypad1 = 257,
    Keypad2 = 258,
    Keypad3 = 259,
    Keypad4 = 260,
    Keypad5 = 261,
    Keypad6 = 262,
    Keypad7 = 263,
    Keypad8 = 264,
    Keypad9 = 265,
    KeypadPeriod = 266,
    KeypadDivide = 267,
    KeypadMultiply = 268,
    KeypadMinus = 269,
    KeypadPlus = 270,
    KeypadEnter = 271,
    KeypadEquals = 272,
    UpArrow = 273,
    DownArrow = 274,
    RightArrow = 275,
    LeftArrow = 276,
    Insert = 277,
    Home = 278,
    End = 279,
    PageUp = 280,
    PageDown = 281,
    F1 = 282,
    F2 = 283,
    F3 = 284,
    F4 = 285,
    F5 = 286,
    F6 = 287,
    F7 = 288,
    F8 = 289,
    F9 = 290,
    F10 = 291,
    F11 = 292,
    F12 = 293,
    F13 = 294,
    F14 = 295,
    F15 = 296,
    Alpha0 = 48,
    Alpha1 = 49,
    Alpha2 = 50,
    Alpha3 = 51,
    Alpha4 = 52,
    Alpha5 = 53,
    Alpha6 = 54,
    Alpha7 = 55,
    Alpha8 = 56,
    Alpha9 = 57,
    Exclaim = 33,
    DoubleQuote = 34,
    Hash = 35,
    Dollar = 36,
    Percent = 37,
    Ampersand = 38,
    Quote = 39,
    LeftParen = 40,
    RightParen = 41,
    Asterisk = 42,
    Plus = 43,
    Comma = 44,
    Minus = 45,
    Period = 46,
    Slash = 47,
    Colon = 58,
    Semicolon = 59,
    Less = 60,
    Equals = 61,
    Greater = 62,
    Question = 63,
    At = 64,
    LeftBracket = 91,
    Backslash = 92,
    RightBracket = 93,
    Caret = 94,
    Underscore = 95,
    BackQuote = 96,
    A = 97,
    B = 98,
    C = 99,
    D = 100,
    E = 101,
    F = 102,
    G = 103,
    H = 104,
    I = 105,
    J = 106,
    K = 107,
    L = 108,
    M = 109,
    N = 110,
    O = 111,
    P = 112,
    Q = 113,
    R = 114,
    S = 115,
    T = 116,
    U = 117,
    V = 118,
    W = 119,
    X = 120,
    Y = 121,
    Z = 122,
    LeftCurlyBracket = 123,
    Pipe = 124,
    RightCurlyBracket = 125,
    Tilde = 126,
    Numlock = 300,
    CapsLock = 301,
    ScrollLock = 302,
    RightShift = 303,
    LeftShift = 304,
    RightControl = 305,
    LeftControl = 306,
    RightAlt = 307,
    LeftAlt = 308,
    LeftCommand = 310,
    LeftApple = 310,
    LeftWindows = 311,
    RightCommand = 309,
    RightApple = 309,
    RightWindows = 312,
    AltGr = 313,
    Help = 315,
    Print = 316,
    SysReq = 317,
    Break = 318,
    Menu = 319,
    Mouse0 = 323,
    Mouse1 = 324,
    Mouse2 = 325,
    Mouse3 = 326,
    Mouse4 = 327,
    Mouse5 = 328,
    Mouse6 = 329,
    JoystickButton0 = 330,
    JoystickButton1 = 331,
    JoystickButton2 = 332,
    JoystickButton3 = 333,
    JoystickButton4 = 334,
    JoystickButton5 = 335,
    JoystickButton6 = 336,
    JoystickButton7 = 337,
    JoystickButton8 = 338,
    JoystickButton9 = 339,
    JoystickButton10 = 340,
    JoystickButton11 = 341,
    JoystickButton12 = 342,
    JoystickButton13 = 343,
    JoystickButton14 = 344,
    JoystickButton15 = 345,
    JoystickButton16 = 346,
    JoystickButton17 = 347,
    JoystickButton18 = 348,
    JoystickButton19 = 349,
    Joystick1Button0 = 350,
    Joystick1Button1 = 351,
    Joystick1Button2 = 352,
    Joystick1Button3 = 353,
    Joystick1Button4 = 354,
    Joystick1Button5 = 355,
    Joystick1Button6 = 356,
    Joystick1Button7 = 357,
    Joystick1Button8 = 358,
    Joystick1Button9 = 359,
    Joystick1Button10 = 360,
    Joystick1Button11 = 361,
    Joystick1Button12 = 362,
    Joystick1Button13 = 363,
    Joystick1Button14 = 364,
    Joystick1Button15 = 365,
    Joystick1Button16 = 366,
    Joystick1Button17 = 367,
    Joystick1Button18 = 368,
    Joystick1Button19 = 369,
    Joystick2Button0 = 370,
    Joystick2Button1 = 371,
    Joystick2Button2 = 372,
    Joystick2Button3 = 373,
    Joystick2Button4 = 374,
    Joystick2Button5 = 375,
    Joystick2Button6 = 376,
    Joystick2Button7 = 377,
    Joystick2Button8 = 378,
    Joystick2Button9 = 379,
    Joystick2Button10 = 380,
    Joystick2Button11 = 381,
    Joystick2Button12 = 382,
    Joystick2Button13 = 383,
    Joystick2Button14 = 384,
    Joystick2Button15 = 385,
    Joystick2Button16 = 386,
    Joystick2Button17 = 387,
    Joystick2Button18 = 388,
    Joystick2Button19 = 389,
    Joystick3Button0 = 390,
    Joystick3Button1 = 391,
    Joystick3Button2 = 392,
    Joystick3Button3 = 393,
    Joystick3Button4 = 394,
    Joystick3Button5 = 395,
    Joystick3Button6 = 396,
    Joystick3Button7 = 397,
    Joystick3Button8 = 398,
    Joystick3Button9 = 399,
    Joystick3Button10 = 400,
    Joystick3Button11 = 401,
    Joystick3Button12 = 402,
    Joystick3Button13 = 403,
    Joystick3Button14 = 404,
    Joystick3Button15 = 405,
    Joystick3Button16 = 406,
    Joystick3Button17 = 407,
    Joystick3Button18 = 408,
    Joystick3Button19 = 409,
    Joystick4Button0 = 410,
    Joystick4Button1 = 411,
    Joystick4Button2 = 412,
    Joystick4Button3 = 413,
    Joystick4Button4 = 414,
    Joystick4Button5 = 415,
    Joystick4Button6 = 416,
    Joystick4Button7 = 417,
    Joystick4Button8 = 418,
    Joystick4Button9 = 419,
    Joystick4Button10 = 420,
    Joystick4Button11 = 421,
    Joystick4Button12 = 422,
    Joystick4Button13 = 423,
    Joystick4Button14 = 424,
    Joystick4Button15 = 425,
    Joystick4Button16 = 426,
    Joystick4Button17 = 427,
    Joystick4Button18 = 428,
    Joystick4Button19 = 429,
    Joystick5Button0 = 430,
    Joystick5Button1 = 431,
    Joystick5Button2 = 432,
    Joystick5Button3 = 433,
    Joystick5Button4 = 434,
    Joystick5Button5 = 435,
    Joystick5Button6 = 436,
    Joystick5Button7 = 437,
    Joystick5Button8 = 438,
    Joystick5Button9 = 439,
    Joystick5Button10 = 440,
    Joystick5Button11 = 441,
    Joystick5Button12 = 442,
    Joystick5Button13 = 443,
    Joystick5Button14 = 444,
    Joystick5Button15 = 445,
    Joystick5Button16 = 446,
    Joystick5Button17 = 447,
    Joystick5Button18 = 448,
    Joystick5Button19 = 449,
    Joystick6Button0 = 450,
    Joystick6Button1 = 451,
    Joystick6Button2 = 452,
    Joystick6Button3 = 453,
    Joystick6Button4 = 454,
    Joystick6Button5 = 455,
    Joystick6Button6 = 456,
    Joystick6Button7 = 457,
    Joystick6Button8 = 458,
    Joystick6Button9 = 459,
    Joystick6Button10 = 460,
    Joystick6Button11 = 461,
    Joystick6Button12 = 462,
    Joystick6Button13 = 463,
    Joystick6Button14 = 464,
    Joystick6Button15 = 465,
    Joystick6Button16 = 466,
    Joystick6Button17 = 467,
    Joystick6Button18 = 468,
    Joystick6Button19 = 469,
    Joystick7Button0 = 470,
    Joystick7Button1 = 471,
    Joystick7Button2 = 472,
    Joystick7Button3 = 473,
    Joystick7Button4 = 474,
    Joystick7Button5 = 475,
    Joystick7Button6 = 476,
    Joystick7Button7 = 477,
    Joystick7Button8 = 478,
    Joystick7Button9 = 479,
    Joystick7Button10 = 480,
    Joystick7Button11 = 481,
    Joystick7Button12 = 482,
    Joystick7Button13 = 483,
    Joystick7Button14 = 484,
    Joystick7Button15 = 485,
    Joystick7Button16 = 486,
    Joystick7Button17 = 487,
    Joystick7Button18 = 488,
    Joystick7Button19 = 489,
    Joystick8Button0 = 490,
    Joystick8Button1 = 491,
    Joystick8Button2 = 492,
    Joystick8Button3 = 493,
    Joystick8Button4 = 494,
    Joystick8Button5 = 495,
    Joystick8Button6 = 496,
    Joystick8Button7 = 497,
    Joystick8Button8 = 498,
    Joystick8Button9 = 499,
    Joystick8Button10 = 500,
    Joystick8Button11 = 501,
    Joystick8Button12 = 502,
    Joystick8Button13 = 503,
    Joystick8Button14 = 504,
    Joystick8Button15 = 505,
    Joystick8Button16 = 506,
    Joystick8Button17 = 507,
    Joystick8Button18 = 508,
    Joystick8Button19 = 509,
  }
  export enum iPhoneScreenOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    AutoRotation = 5,
    Landscape = 6,
  }
  export enum iPhoneNetworkReachability {
    NotReachable = 0,
    ReachableViaCarrierDataNetwork = 1,
    ReachableViaWiFiNetwork = 2,
  }
  export enum iPhoneGeneration {
    Unknown = 0,
    iPhone = 1,
    iPhone3G = 2,
    iPhone3GS = 3,
    iPodTouch1Gen = 4,
    iPodTouch2Gen = 5,
    iPodTouch3Gen = 6,
    iPad1Gen = 7,
    iPhone4 = 8,
    iPodTouch4Gen = 9,
    iPad2Gen = 10,
    iPhone4S = 11,
    iPad3Gen = 12,
    iPhone5 = 13,
    iPodTouch5Gen = 14,
    iPadMini1Gen = 15,
    iPad4Gen = 16,
    iPhone5C = 17,
    iPhone5S = 18,
    iPhoneUnknown = 19,
    iPadUnknown = 20,
    iPodTouchUnknown = 21,
  }
  export interface iPhoneSettings {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum iPhoneTouchPhase {
    Began = 0,
    Moved = 1,
    Stationary = 2,
    Ended = 3,
    Canceled = 4,
  }
  export interface iPhoneTouch {
    positionDelta: UnityEngine.Vector2;
    timeDelta: number;
    fingerId: number;
    position: UnityEngine.Vector2;
    deltaPosition: UnityEngine.Vector2;
    deltaTime: number;
    tapCount: number;
    phase: UnityEngine.iPhoneTouchPhase;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum iPhoneMovieControlMode {
    Full = 0,
    Minimal = 1,
    CancelOnTouch = 2,
    Hidden = 3,
    VolumeOnly = 4,
  }
  export enum iPhoneMovieScalingMode {
    None = 0,
    AspectFit = 1,
    AspectFill = 2,
    Fill = 3,
  }
  export interface iPhoneUtils {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum iPhoneKeyboardType {
    Default = 0,
    ASCIICapable = 1,
    NumbersAndPunctuation = 2,
    URL = 3,
    NumberPad = 4,
    PhonePad = 5,
    NamePhonePad = 6,
    EmailAddress = 7,
  }
  export interface iPhoneKeyboard {
    text: string;
    active: boolean;
    done: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface iPhoneAccelerationEvent {
    timeDelta: number;
    acceleration: UnityEngine.Vector3;
    deltaTime: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum iPhoneOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    FaceUp = 5,
    FaceDown = 6,
  }
  export interface iPhoneInput {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface iPhone {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum iOSActivityIndicatorStyle {
    DontShow = 0,
    WhiteLarge = 1,
    White = 2,
    Gray = 3,
  }
  export enum CalendarIdentifier {
    GregorianCalendar = 0,
    BuddhistCalendar = 1,
    ChineseCalendar = 2,
    HebrewCalendar = 3,
    IslamicCalendar = 4,
    IslamicCivilCalendar = 5,
    JapaneseCalendar = 6,
    RepublicOfChinaCalendar = 7,
    PersianCalendar = 8,
    IndianCalendar = 9,
    ISO8601Calendar = 10,
  }
  export enum CalendarUnit {
    Era = 0,
    Year = 1,
    Month = 2,
    Day = 3,
    Hour = 4,
    Minute = 5,
    Second = 6,
    Week = 7,
    Weekday = 8,
    WeekdayOrdinal = 9,
    Quarter = 10,
  }
  export interface LocalNotification {
    fireDate: any; // System.DateTime
    timeZone: string;
    repeatInterval: UnityEngine.CalendarUnit;
    repeatCalendar: UnityEngine.CalendarIdentifier;
    alertBody: string;
    alertAction: string;
    hasAction: boolean;
    alertLaunchImage: string;
    applicationIconBadgeNumber: number;
    soundName: string;
    userInfo: any; // System.Collections.IDictionary
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface RemoteNotification {
    alertBody: string;
    hasAction: boolean;
    applicationIconBadgeNumber: number;
    soundName: string;
    userInfo: any; // System.Collections.IDictionary
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum RemoteNotificationType {
    None = 0,
    Badge = 1,
    Sound = 2,
    Alert = 3,
  }
  export interface NotificationServices {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ADBannerView {
    loaded: boolean;
    visible: boolean;
    layout: UnityEngine.ADBannerView_Layout;
    position: UnityEngine.Vector2;
    size: UnityEngine.Vector2;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum ADBannerView_Layout {
    Top = 0,
    Bottom = 1,
    TopLeft = 0,
    TopRight = 4,
    TopCenter = 8,
    BottomLeft = 1,
    BottomRight = 5,
    BottomCenter = 9,
    CenterLeft = 2,
    CenterRight = 6,
    Center = 10,
    Manual = -1,
  }
  export enum ADBannerView_Type {
    Banner = 0,
    MediumRect = 1,
  }
  export interface ADBannerView_BannerWasClickedDelegate {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ADBannerView_BannerWasLoadedDelegate {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ADInterstitialAd {
    loaded: boolean;
    Show: (() => void);
    ReloadAd: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ADInterstitialAd_InterstitialWasLoadedDelegate {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ILogger {
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    IsLogTypeAllowed: ((logType: UnityEngine.LogType) => boolean);
    Log: ((logType: UnityEngine.LogType, message: any) => void) | ((logType: UnityEngine.LogType, message: any, context: UnityEngine.Object) => void) | ((logType: UnityEngine.LogType, tag: string, message: any) => void) | ((logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object) => void) | ((message: any) => void) | ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogWarning: ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogError: ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogFormat: ((logType: UnityEngine.LogType, format: string, args: any) => void);
    LogException: ((exception: any) => void);
  }
  export interface ILogHandler {
    LogFormat: ((logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any) => void);
    LogException: ((exception: any, context: UnityEngine.Object) => void);
  }
  export interface Logger {
    logHandler: UnityEngine.ILogHandler;
    logEnabled: boolean;
    filterLogType: UnityEngine.LogType;
    IsLogTypeAllowed: ((logType: UnityEngine.LogType) => boolean);
    Log: ((logType: UnityEngine.LogType, message: any) => void) | ((logType: UnityEngine.LogType, message: any, context: UnityEngine.Object) => void) | ((logType: UnityEngine.LogType, tag: string, message: any) => void) | ((logType: UnityEngine.LogType, tag: string, message: any, context: UnityEngine.Object) => void) | ((message: any) => void) | ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogWarning: ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogError: ((tag: string, message: any) => void) | ((tag: string, message: any, context: UnityEngine.Object) => void);
    LogFormat: ((logType: UnityEngine.LogType, format: string, args: any) => void) | ((logType: UnityEngine.LogType, context: UnityEngine.Object, format: string, args: any) => void);
    LogException: ((exception: any) => void) | ((exception: any, context: UnityEngine.Object) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Color {
    grayscale: number;
    linear: UnityEngine.Color;
    gamma: UnityEngine.Color;
    maxColorComponent: number;
    r: number;
    g: number;
    b: number;
    a: number;
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Color) => boolean);
    GetType: (() => any);
  }
  export interface Color32 {
    r: any; // System.Byte
    g: any; // System.Byte
    b: any; // System.Byte
    a: any; // System.Byte
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export interface ColorUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GradientColorKey {
    color: UnityEngine.Color;
    time: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface GradientAlphaKey {
    alpha: number;
    time: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum GradientMode {
    Blend = 0,
    Fixed = 1,
  }
  export interface Gradient {
    colorKeys: UnityEngine.GradientColorKey[];
    alphaKeys: UnityEngine.GradientAlphaKey[];
    mode: UnityEngine.GradientMode;
    Evaluate: ((time: number) => UnityEngine.Color);
    SetKeys: ((colorKeys: UnityEngine.GradientColorKey[], alphaKeys: UnityEngine.GradientAlphaKey[]) => void);
    Equals: ((o: any) => boolean) | ((other: UnityEngine.Gradient) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface FrustumPlanes {
    left: number;
    right: number;
    bottom: number;
    top: number;
    zNear: number;
    zFar: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Matrix4x4 {
    rotation: UnityEngine.Quaternion;
    lossyScale: UnityEngine.Vector3;
    isIdentity: boolean;
    determinant: number;
    decomposeProjection: UnityEngine.FrustumPlanes;
    inverse: UnityEngine.Matrix4x4;
    transpose: UnityEngine.Matrix4x4;
    m00: number;
    m10: number;
    m20: number;
    m30: number;
    m01: number;
    m11: number;
    m21: number;
    m31: number;
    m02: number;
    m12: number;
    m22: number;
    m32: number;
    m03: number;
    m13: number;
    m23: number;
    m33: number;
    ValidTRS: (() => boolean);
    SetTRS: ((pos: UnityEngine.Vector3, q: UnityEngine.Quaternion, s: UnityEngine.Vector3) => void);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Matrix4x4) => boolean);
    GetColumn: ((index: number) => UnityEngine.Vector4);
    GetRow: ((index: number) => UnityEngine.Vector4);
    SetColumn: ((index: number, column: UnityEngine.Vector4) => void);
    SetRow: ((index: number, row: UnityEngine.Vector4) => void);
    MultiplyPoint: ((point: UnityEngine.Vector3) => UnityEngine.Vector3);
    MultiplyPoint3x4: ((point: UnityEngine.Vector3) => UnityEngine.Vector3);
    MultiplyVector: ((vector: UnityEngine.Vector3) => UnityEngine.Vector3);
    TransformPlane: ((plane: UnityEngine.Plane) => UnityEngine.Plane);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetType: (() => any);
  }
  export interface Vector3 {
    normalized: UnityEngine.Vector3;
    magnitude: number;
    sqrMagnitude: number;
    x: number;
    y: number;
    z: number;
    Set: ((newX: number, newY: number, newZ: number) => void);
    Scale: ((scale: UnityEngine.Vector3) => void);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Vector3) => boolean);
    Normalize: (() => void);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetType: (() => any);
  }
  export interface Quaternion {
    eulerAngles: UnityEngine.Vector3;
    normalized: UnityEngine.Quaternion;
    x: number;
    y: number;
    z: number;
    w: number;
    Set: ((newX: number, newY: number, newZ: number, newW: number) => void);
    SetLookRotation: ((view: UnityEngine.Vector3) => void) | ((view: UnityEngine.Vector3, up: UnityEngine.Vector3) => void);
    SetFromToRotation: ((fromDirection: UnityEngine.Vector3, toDirection: UnityEngine.Vector3) => void);
    Normalize: (() => void);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Quaternion) => boolean);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    SetEulerRotation: ((x: number, y: number, z: number) => void) | ((euler: UnityEngine.Vector3) => void);
    ToEuler: (() => UnityEngine.Vector3);
    SetEulerAngles: ((x: number, y: number, z: number) => void) | ((euler: UnityEngine.Vector3) => void);
    ToEulerAngles: (() => UnityEngine.Vector3);
    SetAxisAngle: ((axis: UnityEngine.Vector3, angle: number) => void);
    GetType: (() => any);
  }
  export interface Mathf {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Vector2 {
    normalized: UnityEngine.Vector2;
    magnitude: number;
    sqrMagnitude: number;
    x: number;
    y: number;
    Set: ((newX: number, newY: number) => void);
    Scale: ((scale: UnityEngine.Vector2) => void);
    Normalize: (() => void);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Vector2) => boolean);
    SqrMagnitude: (() => number);
    GetType: (() => any);
  }
  export interface Vector2Int {
    x: number;
    y: number;
    magnitude: number;
    sqrMagnitude: number;
    Set: ((x: number, y: number) => void);
    Scale: ((scale: UnityEngine.Vector2Int) => void);
    Clamp: ((min: UnityEngine.Vector2Int, max: UnityEngine.Vector2Int) => void);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Vector2Int) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetType: (() => any);
  }
  export interface Vector3Int {
    x: number;
    y: number;
    z: number;
    magnitude: number;
    sqrMagnitude: number;
    Set: ((x: number, y: number, z: number) => void);
    Scale: ((scale: UnityEngine.Vector3Int) => void);
    Clamp: ((min: UnityEngine.Vector3Int, max: UnityEngine.Vector3Int) => void);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Vector3Int) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    GetType: (() => any);
  }
  export interface Vector4 {
    normalized: UnityEngine.Vector4;
    magnitude: number;
    sqrMagnitude: number;
    x: number;
    y: number;
    z: number;
    w: number;
    Set: ((newX: number, newY: number, newZ: number, newW: number) => void);
    Scale: ((scale: UnityEngine.Vector4) => void);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.Vector4) => boolean);
    Normalize: (() => void);
    ToString: (() => string) | ((format: string) => string) | ((format: string, formatProvider: any) => string);
    SqrMagnitude: (() => number);
    GetType: (() => any);
  }
  export enum RPCMode {
  }
  export enum ConnectionTesterStatus {
  }
  export enum NetworkConnectionError {
  }
  export enum NetworkDisconnection {
  }
  export enum MasterServerEvent {
  }
  export enum NetworkStateSynchronization {
  }
  export enum NetworkPeerType {
  }
  export enum NetworkLogLevel {
  }
  export interface NetworkPlayer {
    ipAddress: string;
    port: number;
    guid: string;
    externalIP: string;
    externalPort: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface NetworkViewID {
    isMine: boolean;
    owner: UnityEngine.NetworkPlayer;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface NetworkView {
    observed: UnityEngine.Component;
    stateSynchronization: UnityEngine.NetworkStateSynchronization;
    viewID: UnityEngine.NetworkViewID;
    group: number;
    isMine: boolean;
    owner: UnityEngine.NetworkPlayer;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    RPC: ((name: string, mode: UnityEngine.RPCMode, args: any) => void) | ((name: string, target: UnityEngine.NetworkPlayer, args: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Network {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface BitStream {
    isReading: boolean;
    isWriting: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface HostData {
    useNat: boolean;
    gameType: string;
    gameName: string;
    connectedPlayers: number;
    playerLimit: number;
    ip: any; // System.String[]
    port: number;
    passwordProtected: boolean;
    comment: string;
    guid: string;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface MasterServer {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface NetworkMessageInfo {
    timestamp: number;
    sender: UnityEngine.NetworkPlayer;
    networkView: UnityEngine.NetworkView;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Ping {
    isDone: boolean;
    time: number;
    ip: string;
    DestroyPing: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface PlayerPrefsException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface PlayerPrefs {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface PropertyName {
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean) | ((other: UnityEngine.PropertyName) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Random {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Random_State {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface ResourceRequest {
    asset: UnityEngine.Object;
    isDone: boolean;
    progress: number;
    priority: number;
    allowSceneActivation: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ResourcesAPI {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Resources {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AsyncOperation {
    isDone: boolean;
    progress: number;
    priority: number;
    allowSceneActivation: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Behaviour {
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Component {
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Coroutine {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface CustomYieldInstruction {
    keepWaiting: boolean;
    Current: any; // System.Object
    MoveNext: (() => boolean);
    Reset: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GameObject {
    transform: UnityEngine.Transform;
    layer: number;
    active: boolean;
    activeSelf: boolean;
    activeInHierarchy: boolean;
    isStatic: boolean;
    tag: string;
    scene: UnityEngine.SceneManagement.Scene;
    sceneCullingMask: any; // System.UInt64
    gameObject: UnityEngine.GameObject;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((type: any, includeInactive: boolean) => UnityEngine.Component) | ((type: any) => UnityEngine.Component);
    GetComponentInParent: ((type: any, includeInactive: boolean) => UnityEngine.Component) | ((type: any) => UnityEngine.Component);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    GetComponentsInChildren: ((type: any) => UnityEngine.Component[]) | ((type: any, includeInactive: boolean) => UnityEngine.Component[]);
    GetComponentsInParent: ((type: any) => UnityEngine.Component[]) | ((type: any, includeInactive: boolean) => UnityEngine.Component[]);
    SendMessageUpwards: ((methodName: string, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void);
    SendMessage: ((methodName: string, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void);
    BroadcastMessage: ((methodName: string, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void);
    AddComponent: ((componentType: any) => UnityEngine.Component) | ((className: string) => UnityEngine.Component);
    SetActive: ((value: boolean) => void);
    SetActiveRecursively: ((state: boolean) => void);
    CompareTag: ((tag: string) => boolean);
    SampleAnimation: ((clip: UnityEngine.Object, time: number) => void);
    PlayAnimation: ((animation: UnityEngine.Object) => void);
    StopAnimation: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface LayerMask {
    value: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface MonoBehaviour {
    useGUILayout: boolean;
    runInEditMode: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    IsInvoking: (() => boolean) | ((methodName: string) => boolean);
    CancelInvoke: (() => void) | ((methodName: string) => void);
    Invoke: ((methodName: string, time: number) => void);
    InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
    StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
    StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
    StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
    StopAllCoroutines: (() => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RangeInt {
    end: number;
    start: number;
    length: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum RuntimeInitializeLoadType {
    AfterSceneLoad = 0,
    BeforeSceneLoad = 1,
    AfterAssembliesLoaded = 2,
    BeforeSplashScreen = 3,
    SubsystemRegistration = 4,
  }
  export interface ScriptableObject {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetDirty: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface StackTraceUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface UnityException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface MissingComponentException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface UnassignedReferenceException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface MissingReferenceException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface TextAsset {
    bytes: any; // System.Byte[]
    text: string;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    ToString: (() => string);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    GetType: (() => any);
  }
  export interface TrackedReference {
    Equals: ((o: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum HideFlags {
    None = 0,
    HideInHierarchy = 1,
    HideInInspector = 2,
    DontSaveInEditor = 4,
    NotEditable = 8,
    DontSaveInBuild = 16,
    DontUnloadUnusedAsset = 32,
    DontSave = 52,
    HideAndDontSave = 61,
  }
  export interface Object {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface WaitForEndOfFrame {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface WaitForFixedUpdate {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface WaitForSeconds {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface WaitForSecondsRealtime {
    waitTime: number;
    keepWaiting: boolean;
    Current: any; // System.Object
    Reset: (() => void);
    MoveNext: (() => boolean);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface WaitUntil {
    keepWaiting: boolean;
    Current: any; // System.Object
    MoveNext: (() => boolean);
    Reset: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface WaitWhile {
    keepWaiting: boolean;
    Current: any; // System.Object
    MoveNext: (() => boolean);
    Reset: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface YieldInstruction {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Security {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Types {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ISerializationCallbackReceiver {
    OnBeforeSerialize: (() => void);
    OnAfterDeserialize: (() => void);
  }
  export interface ComputeBuffer {
    count: number;
    stride: number;
    name: string;
    Dispose: (() => void);
    Release: (() => void);
    IsValid: (() => boolean);
    SetData: ((data: any) => void) | ((data: any, managedBufferStartIndex: number, computeBufferStartIndex: number, count: number) => void);
    GetData: ((data: any) => void) | ((data: any, managedBufferStartIndex: number, computeBufferStartIndex: number, count: number) => void);
    SetCounterValue: ((counterValue: any) => void);
    GetNativeBufferPtr: (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ShaderVariantCollection {
    shaderCount: number;
    variantCount: number;
    isWarmedUp: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Clear: (() => void);
    WarmUp: (() => void);
    Add: ((variant: UnityEngine.ShaderVariantCollection_ShaderVariant) => boolean);
    Remove: ((variant: UnityEngine.ShaderVariantCollection_ShaderVariant) => boolean);
    Contains: ((variant: UnityEngine.ShaderVariantCollection_ShaderVariant) => boolean);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface ShaderVariantCollection_ShaderVariant {
    shader: UnityEngine.Shader;
    passType: UnityEngine.Rendering.PassType;
    keywords: any; // System.String[]
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface ComputeShader {
    shaderKeywords: any; // System.String[]
    name: string;
    hideFlags: UnityEngine.HideFlags;
    FindKernel: ((name: string) => number);
    HasKernel: ((name: string) => boolean);
    SetFloat: ((nameID: number, val: number) => void) | ((name: string, val: number) => void);
    SetInt: ((nameID: number, val: number) => void) | ((name: string, val: number) => void);
    SetVector: ((nameID: number, val: UnityEngine.Vector4) => void) | ((name: string, val: UnityEngine.Vector4) => void);
    SetMatrix: ((nameID: number, val: UnityEngine.Matrix4x4) => void) | ((name: string, val: UnityEngine.Matrix4x4) => void);
    SetVectorArray: ((nameID: number, values: UnityEngine.Vector4[]) => void) | ((name: string, values: UnityEngine.Vector4[]) => void);
    SetMatrixArray: ((nameID: number, values: UnityEngine.Matrix4x4[]) => void) | ((name: string, values: UnityEngine.Matrix4x4[]) => void);
    SetTexture: ((kernelIndex: number, nameID: number, texture: UnityEngine.Texture, mipLevel: number) => void) | ((kernelIndex: number, nameID: number, texture: UnityEngine.Texture) => void) | ((kernelIndex: number, name: string, texture: UnityEngine.Texture) => void) | ((kernelIndex: number, name: string, texture: UnityEngine.Texture, mipLevel: number) => void) | ((kernelIndex: number, nameID: number, texture: UnityEngine.RenderTexture, mipLevel: number, element: UnityEngine.Rendering.RenderTextureSubElement) => void) | ((kernelIndex: number, name: string, texture: UnityEngine.RenderTexture, mipLevel: number, element: UnityEngine.Rendering.RenderTextureSubElement) => void);
    SetTextureFromGlobal: ((kernelIndex: number, nameID: number, globalTextureNameID: number) => void) | ((kernelIndex: number, name: string, globalTextureName: string) => void);
    SetBuffer: ((kernelIndex: number, nameID: number, buffer: UnityEngine.ComputeBuffer) => void) | ((kernelIndex: number, nameID: number, buffer: UnityEngine.GraphicsBuffer) => void) | ((kernelIndex: number, name: string, buffer: UnityEngine.ComputeBuffer) => void) | ((kernelIndex: number, name: string, buffer: UnityEngine.GraphicsBuffer) => void);
    Dispatch: ((kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number) => void);
    EnableKeyword: ((keyword: string) => void);
    DisableKeyword: ((keyword: string) => void);
    IsKeywordEnabled: ((keyword: string) => boolean);
    SetFloats: ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    SetInts: ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
    SetBool: ((name: string, val: boolean) => void) | ((nameID: number, val: boolean) => void);
    SetConstantBuffer: ((nameID: number, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((name: string, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((nameID: number, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((name: string, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
    DispatchIndirect: ((kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer, argsOffset: any) => void) | ((kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer) => void) | ((kernelIndex: number, argsBuffer: UnityEngine.GraphicsBuffer, argsOffset: any) => void) | ((kernelIndex: number, argsBuffer: UnityEngine.GraphicsBuffer) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum SnapAxis {
    None = 0,
    X = 1,
    Y = 2,
    Z = 4,
    All = 7,
  }
  export interface Snapping {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface StaticBatchingUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum BatteryStatus {
    Unknown = 0,
    Charging = 1,
    Discharging = 2,
    NotCharging = 3,
    Full = 4,
  }
  export enum OperatingSystemFamily {
    Other = 0,
    MacOSX = 1,
    Windows = 2,
    Linux = 3,
  }
  export enum DeviceType {
    Unknown = 0,
    Handheld = 1,
    Console = 2,
    Desktop = 3,
  }
  export interface SystemInfo {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Time {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface TouchScreenKeyboard {
    text: string;
    active: boolean;
    done: boolean;
    wasCanceled: boolean;
    status: UnityEngine.TouchScreenKeyboard_Status;
    characterLimit: number;
    canGetSelection: boolean;
    canSetSelection: boolean;
    selection: UnityEngine.RangeInt;
    type: UnityEngine.TouchScreenKeyboardType;
    targetDisplay: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum TouchScreenKeyboard_Status {
    Visible = 0,
    Done = 1,
    Canceled = 2,
    LostFocus = 3,
  }
  export enum TouchScreenKeyboardType {
    Default = 0,
    ASCIICapable = 1,
    NumbersAndPunctuation = 2,
    URL = 3,
    NumberPad = 4,
    PhonePad = 5,
    NamePhonePad = 6,
    EmailAddress = 7,
    NintendoNetworkAccount = 8,
    Social = 9,
    Search = 10,
    DecimalPad = 11,
    OneTimeCode = 12,
  }
  export interface UnityEventQueueSystem {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Pose {
    forward: UnityEngine.Vector3;
    right: UnityEngine.Vector3;
    up: UnityEngine.Vector3;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    ToString: (() => string) | ((format: string) => string);
    GetTransformedBy: ((lhs: UnityEngine.Pose) => UnityEngine.Pose) | ((lhs: UnityEngine.Transform) => UnityEngine.Pose);
    Equals: ((obj: any) => boolean) | ((other: UnityEngine.Pose) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export enum DrivenTransformProperties {
    None = 0,
    All = -1,
    AnchoredPositionX = 2,
    AnchoredPositionY = 4,
    AnchoredPositionZ = 8,
    Rotation = 16,
    ScaleX = 32,
    ScaleY = 64,
    ScaleZ = 128,
    AnchorMinX = 256,
    AnchorMinY = 512,
    AnchorMaxX = 1024,
    AnchorMaxY = 2048,
    SizeDeltaX = 4096,
    SizeDeltaY = 8192,
    PivotX = 16384,
    PivotY = 32768,
    AnchoredPosition = 6,
    AnchoredPosition3D = 14,
    Scale = 224,
    AnchorMin = 768,
    AnchorMax = 3072,
    Anchors = 3840,
    SizeDelta = 12288,
    Pivot = 49152,
  }
  export interface DrivenRectTransformTracker {
    Add: ((driver: UnityEngine.Object, rectTransform: UnityEngine.RectTransform, drivenProperties: UnityEngine.DrivenTransformProperties) => void);
    Clear: ((revertValues: boolean) => void) | (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RectTransform {
    rect: UnityEngine.Rect;
    anchorMin: UnityEngine.Vector2;
    anchorMax: UnityEngine.Vector2;
    anchoredPosition: UnityEngine.Vector2;
    sizeDelta: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    anchoredPosition3D: UnityEngine.Vector3;
    offsetMin: UnityEngine.Vector2;
    offsetMax: UnityEngine.Vector2;
    position: UnityEngine.Vector3;
    localPosition: UnityEngine.Vector3;
    eulerAngles: UnityEngine.Vector3;
    localEulerAngles: UnityEngine.Vector3;
    right: UnityEngine.Vector3;
    up: UnityEngine.Vector3;
    forward: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    localRotation: UnityEngine.Quaternion;
    localScale: UnityEngine.Vector3;
    parent: UnityEngine.Transform;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    root: UnityEngine.Transform;
    childCount: number;
    lossyScale: UnityEngine.Vector3;
    hasChanged: boolean;
    hierarchyCapacity: number;
    hierarchyCount: number;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    ForceUpdateRectTransforms: (() => void);
    GetLocalCorners: ((fourCornersArray: UnityEngine.Vector3[]) => void);
    GetWorldCorners: ((fourCornersArray: UnityEngine.Vector3[]) => void);
    SetInsetAndSizeFromParentEdge: ((edge: UnityEngine.RectTransform_Edge, inset: number, size: number) => void);
    SetSizeWithCurrentAnchors: ((axis: UnityEngine.RectTransform_Axis, size: number) => void);
    SetParent: ((p: UnityEngine.Transform) => void) | ((parent: UnityEngine.Transform, worldPositionStays: boolean) => void);
    SetPositionAndRotation: ((position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion) => void);
    Translate: ((translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space) => void) | ((translation: UnityEngine.Vector3) => void) | ((x: number, y: number, z: number, relativeTo: UnityEngine.Space) => void) | ((x: number, y: number, z: number) => void) | ((translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform) => void) | ((x: number, y: number, z: number, relativeTo: UnityEngine.Transform) => void);
    Rotate: ((eulers: UnityEngine.Vector3, relativeTo: UnityEngine.Space) => void) | ((eulers: UnityEngine.Vector3) => void) | ((xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space) => void) | ((xAngle: number, yAngle: number, zAngle: number) => void) | ((axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space) => void) | ((axis: UnityEngine.Vector3, angle: number) => void);
    RotateAround: ((point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number) => void) | ((axis: UnityEngine.Vector3, angle: number) => void);
    LookAt: ((target: UnityEngine.Transform, worldUp: UnityEngine.Vector3) => void) | ((target: UnityEngine.Transform) => void) | ((worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3) => void) | ((worldPosition: UnityEngine.Vector3) => void);
    TransformDirection: ((direction: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformDirection: ((direction: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    TransformVector: ((vector: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformVector: ((vector: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    TransformPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    DetachChildren: (() => void);
    SetAsFirstSibling: (() => void);
    SetAsLastSibling: (() => void);
    SetSiblingIndex: ((index: number) => void);
    GetSiblingIndex: (() => number);
    Find: ((n: string) => UnityEngine.Transform);
    IsChildOf: ((parent: UnityEngine.Transform) => boolean);
    FindChild: ((n: string) => UnityEngine.Transform);
    GetEnumerator: (() => any);
    RotateAroundLocal: ((axis: UnityEngine.Vector3, angle: number) => void);
    GetChild: ((index: number) => UnityEngine.Transform);
    GetChildCount: (() => number);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum RectTransform_Edge {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3,
  }
  export enum RectTransform_Axis {
    Horizontal = 0,
    Vertical = 1,
  }
  export interface RectTransform_ReapplyDrivenProperties {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((driven: UnityEngine.RectTransform) => void);
    BeginInvoke: ((driven: UnityEngine.RectTransform, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Transform {
    position: UnityEngine.Vector3;
    localPosition: UnityEngine.Vector3;
    eulerAngles: UnityEngine.Vector3;
    localEulerAngles: UnityEngine.Vector3;
    right: UnityEngine.Vector3;
    up: UnityEngine.Vector3;
    forward: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    localRotation: UnityEngine.Quaternion;
    localScale: UnityEngine.Vector3;
    parent: UnityEngine.Transform;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    root: UnityEngine.Transform;
    childCount: number;
    lossyScale: UnityEngine.Vector3;
    hasChanged: boolean;
    hierarchyCapacity: number;
    hierarchyCount: number;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetParent: ((p: UnityEngine.Transform) => void) | ((parent: UnityEngine.Transform, worldPositionStays: boolean) => void);
    SetPositionAndRotation: ((position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion) => void);
    Translate: ((translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space) => void) | ((translation: UnityEngine.Vector3) => void) | ((x: number, y: number, z: number, relativeTo: UnityEngine.Space) => void) | ((x: number, y: number, z: number) => void) | ((translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform) => void) | ((x: number, y: number, z: number, relativeTo: UnityEngine.Transform) => void);
    Rotate: ((eulers: UnityEngine.Vector3, relativeTo: UnityEngine.Space) => void) | ((eulers: UnityEngine.Vector3) => void) | ((xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space) => void) | ((xAngle: number, yAngle: number, zAngle: number) => void) | ((axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space) => void) | ((axis: UnityEngine.Vector3, angle: number) => void);
    RotateAround: ((point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number) => void) | ((axis: UnityEngine.Vector3, angle: number) => void);
    LookAt: ((target: UnityEngine.Transform, worldUp: UnityEngine.Vector3) => void) | ((target: UnityEngine.Transform) => void) | ((worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3) => void) | ((worldPosition: UnityEngine.Vector3) => void);
    TransformDirection: ((direction: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformDirection: ((direction: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    TransformVector: ((vector: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformVector: ((vector: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    TransformPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    InverseTransformPoint: ((position: UnityEngine.Vector3) => UnityEngine.Vector3) | ((x: number, y: number, z: number) => UnityEngine.Vector3);
    DetachChildren: (() => void);
    SetAsFirstSibling: (() => void);
    SetAsLastSibling: (() => void);
    SetSiblingIndex: ((index: number) => void);
    GetSiblingIndex: (() => number);
    Find: ((n: string) => UnityEngine.Transform);
    IsChildOf: ((parent: UnityEngine.Transform) => boolean);
    FindChild: ((n: string) => UnityEngine.Transform);
    GetEnumerator: (() => any);
    RotateAroundLocal: ((axis: UnityEngine.Vector3, angle: number) => void);
    GetChild: ((index: number) => UnityEngine.Transform);
    GetChildCount: (() => number);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum SpriteDrawMode {
    Simple = 0,
    Sliced = 1,
    Tiled = 2,
  }
  export enum SpriteTileMode {
    Continuous = 0,
    Adaptive = 1,
  }
  export enum SpriteMaskInteraction {
    None = 0,
    VisibleInsideMask = 1,
    VisibleOutsideMask = 2,
  }
  export interface SpriteRenderer {
    sprite: UnityEngine.Sprite;
    drawMode: UnityEngine.SpriteDrawMode;
    size: UnityEngine.Vector2;
    adaptiveModeThreshold: number;
    tileMode: UnityEngine.SpriteTileMode;
    color: UnityEngine.Color;
    maskInteraction: UnityEngine.SpriteMaskInteraction;
    flipX: boolean;
    flipY: boolean;
    spriteSortPoint: UnityEngine.SpriteSortPoint;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    castShadows: boolean;
    motionVectors: boolean;
    useLightProbes: boolean;
    bounds: UnityEngine.Bounds;
    enabled: boolean;
    isVisible: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    receiveShadows: boolean;
    forceRenderingOff: boolean;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    renderingLayerMask: any; // System.UInt32
    rendererPriority: number;
    rayTracingMode: UnityEngine.Experimental.Rendering.RayTracingMode;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    allowOcclusionWhenDynamic: boolean;
    isPartOfStaticBatch: boolean;
    worldToLocalMatrix: UnityEngine.Matrix4x4;
    localToWorldMatrix: UnityEngine.Matrix4x4;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    materials: UnityEngine.Material[];
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    sharedMaterials: UnityEngine.Material[];
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasPropertyBlock: (() => boolean);
    SetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetPropertyBlock: ((properties: UnityEngine.MaterialPropertyBlock) => void) | ((properties: UnityEngine.MaterialPropertyBlock, materialIndex: number) => void);
    GetMaterials: ((m: any) => void);
    GetSharedMaterials: ((m: any) => void);
    GetClosestReflectionProbes: ((result: any) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum SpriteMeshType {
    FullRect = 0,
    Tight = 1,
  }
  export enum SpriteAlignment {
    Center = 0,
    TopLeft = 1,
    TopCenter = 2,
    TopRight = 3,
    LeftCenter = 4,
    RightCenter = 5,
    BottomLeft = 6,
    BottomCenter = 7,
    BottomRight = 8,
    Custom = 9,
  }
  export enum SpritePackingMode {
    Tight = 0,
    Rectangle = 1,
  }
  export enum SpritePackingRotation {
    None = 0,
    FlipHorizontal = 1,
    FlipVertical = 2,
    Rotate180 = 3,
    Any = 15,
  }
  export enum SpriteSortPoint {
    Center = 0,
    Pivot = 1,
  }
  export interface SecondarySpriteTexture {
    name: string;
    texture: UnityEngine.Texture2D;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Sprite {
    bounds: UnityEngine.Bounds;
    rect: UnityEngine.Rect;
    border: UnityEngine.Vector4;
    texture: UnityEngine.Texture2D;
    pixelsPerUnit: number;
    spriteAtlasTextureScale: number;
    associatedAlphaSplitTexture: UnityEngine.Texture2D;
    pivot: UnityEngine.Vector2;
    packed: boolean;
    packingMode: UnityEngine.SpritePackingMode;
    packingRotation: UnityEngine.SpritePackingRotation;
    textureRect: UnityEngine.Rect;
    textureRectOffset: UnityEngine.Vector2;
    vertices: UnityEngine.Vector2[];
    triangles: any; // System.UInt16[]
    uv: UnityEngine.Vector2[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetPhysicsShapeCount: (() => number);
    GetPhysicsShapePointCount: ((shapeIdx: number) => number);
    GetPhysicsShape: ((shapeIdx: number, physicsShape: any) => number);
    OverridePhysicsShape: ((physicsShapes: any) => void);
    OverrideGeometry: ((vertices: UnityEngine.Vector2[], triangles: any) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioSettings {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioSettings_AudioConfigurationChangeHandler {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((deviceWasChanged: boolean) => void);
    BeginInvoke: ((deviceWasChanged: boolean, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioSettings_Mobile {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioSource {
    panLevel: number;
    pan: number;
    volume: number;
    pitch: number;
    time: number;
    timeSamples: number;
    clip: UnityEngine.AudioClip;
    outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
    isPlaying: boolean;
    isVirtual: boolean;
    loop: boolean;
    ignoreListenerVolume: boolean;
    playOnAwake: boolean;
    ignoreListenerPause: boolean;
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    panStereo: number;
    spatialBlend: number;
    spatialize: boolean;
    spatializePostEffects: boolean;
    reverbZoneMix: number;
    bypassEffects: boolean;
    bypassListenerEffects: boolean;
    bypassReverbZones: boolean;
    dopplerLevel: number;
    spread: number;
    priority: number;
    mute: boolean;
    minDistance: number;
    maxDistance: number;
    rolloffMode: UnityEngine.AudioRolloffMode;
    minVolume: number;
    maxVolume: number;
    rolloffFactor: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Play: (() => void) | ((delay: any) => void);
    PlayDelayed: ((delay: number) => void);
    PlayScheduled: ((time: number) => void);
    PlayOneShot: ((clip: UnityEngine.AudioClip) => void) | ((clip: UnityEngine.AudioClip, volumeScale: number) => void);
    SetScheduledStartTime: ((time: number) => void);
    SetScheduledEndTime: ((time: number) => void);
    Stop: (() => void);
    Pause: (() => void);
    UnPause: (() => void);
    SetCustomCurve: ((type: UnityEngine.AudioSourceCurveType, curve: UnityEngine.AnimationCurve) => void);
    GetCustomCurve: ((type: UnityEngine.AudioSourceCurveType) => UnityEngine.AnimationCurve);
    GetOutputData: ((numSamples: number, channel: number) => any) | ((samples: any, channel: number) => void);
    GetSpectrumData: ((numSamples: number, channel: number, window: UnityEngine.FFTWindow) => any) | ((samples: any, channel: number, window: UnityEngine.FFTWindow) => void);
    SetSpatializerFloat: ((index: number, value: number) => boolean);
    SetAmbisonicDecoderFloat: ((index: number, value: number) => boolean);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioLowPassFilter {
    lowpassResonaceQ: number;
    customCutoffCurve: UnityEngine.AnimationCurve;
    cutoffFrequency: number;
    lowpassResonanceQ: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioHighPassFilter {
    highpassResonaceQ: number;
    cutoffFrequency: number;
    highpassResonanceQ: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioReverbFilter {
    lFReference: number;
    reverbPreset: UnityEngine.AudioReverbPreset;
    dryLevel: number;
    room: number;
    roomHF: number;
    roomRolloffFactor: number;
    decayTime: number;
    decayHFRatio: number;
    reflectionsLevel: number;
    reflectionsDelay: number;
    reverbLevel: number;
    reverbDelay: number;
    diffusion: number;
    density: number;
    hfReference: number;
    roomLF: number;
    lfReference: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum AudioSpeakerMode {
    Raw = 0,
    Mono = 1,
    Stereo = 2,
    Quad = 3,
    Surround = 4,
    Mode5point1 = 5,
    Mode7point1 = 6,
    Prologic = 7,
  }
  export enum AudioDataLoadState {
    Unloaded = 0,
    Loading = 1,
    Loaded = 2,
    Failed = 3,
  }
  export interface AudioConfiguration {
    speakerMode: UnityEngine.AudioSpeakerMode;
    dspBufferSize: number;
    sampleRate: number;
    numRealVoices: number;
    numVirtualVoices: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum AudioCompressionFormat {
    PCM = 0,
    Vorbis = 1,
    ADPCM = 2,
    MP3 = 3,
    VAG = 4,
    HEVAG = 5,
    XMA = 6,
    AAC = 7,
    GCADPCM = 8,
    ATRAC9 = 9,
  }
  export enum AudioClipLoadType {
    DecompressOnLoad = 0,
    CompressedInMemory = 1,
    Streaming = 2,
  }
  export enum AudioVelocityUpdateMode {
    Auto = 0,
    Fixed = 1,
    Dynamic = 2,
  }
  export enum FFTWindow {
    Rectangular = 0,
    Triangle = 1,
    Hamming = 2,
    Hanning = 3,
    Blackman = 4,
    BlackmanHarris = 5,
  }
  export enum AudioRolloffMode {
    Logarithmic = 0,
    Linear = 1,
    Custom = 2,
  }
  export enum AudioSourceCurveType {
    CustomRolloff = 0,
    SpatialBlend = 1,
    ReverbZoneMix = 2,
    Spread = 3,
  }
  export enum AudioReverbPreset {
    Off = 0,
    Generic = 1,
    PaddedCell = 2,
    Room = 3,
    Bathroom = 4,
    Livingroom = 5,
    Stoneroom = 6,
    Auditorium = 7,
    Concerthall = 8,
    Cave = 9,
    Arena = 10,
    Hangar = 11,
    CarpetedHallway = 12,
    Hallway = 13,
    StoneCorridor = 14,
    Alley = 15,
    Forest = 16,
    City = 17,
    Mountains = 18,
    Quarry = 19,
    Plain = 20,
    ParkingLot = 21,
    SewerPipe = 22,
    Underwater = 23,
    Drugged = 24,
    Dizzy = 25,
    Psychotic = 26,
    User = 27,
  }
  export interface AudioClip {
    length: number;
    samples: number;
    channels: number;
    frequency: number;
    isReadyToPlay: boolean;
    loadType: UnityEngine.AudioClipLoadType;
    preloadAudioData: boolean;
    ambisonic: boolean;
    loadInBackground: boolean;
    loadState: UnityEngine.AudioDataLoadState;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    LoadAudioData: (() => boolean);
    UnloadAudioData: (() => boolean);
    GetData: ((data: any, offsetSamples: number) => boolean);
    SetData: ((data: any, offsetSamples: number) => boolean);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioClip_PCMReaderCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((data: any) => void);
    BeginInvoke: ((data: any, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioClip_PCMSetPositionCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((position: number) => void);
    BeginInvoke: ((position: number, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioBehaviour {
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioListener {
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioReverbZone {
    minDistance: number;
    maxDistance: number;
    reverbPreset: UnityEngine.AudioReverbPreset;
    room: number;
    roomHF: number;
    roomLF: number;
    decayTime: number;
    decayHFRatio: number;
    reflections: number;
    reflectionsDelay: number;
    reverb: number;
    reverbDelay: number;
    HFReference: number;
    LFReference: number;
    roomRolloffFactor: number;
    diffusion: number;
    density: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioDistortionFilter {
    distortionLevel: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioEchoFilter {
    delay: number;
    decayRatio: number;
    dryMix: number;
    wetMix: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AudioChorusFilter {
    dryMix: number;
    wetMix1: number;
    wetMix2: number;
    wetMix3: number;
    delay: number;
    rate: number;
    depth: number;
    feedback: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Microphone {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AudioRenderer {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface MovieTexture {
    audioClip: UnityEngine.AudioClip;
    loop: boolean;
    isPlaying: boolean;
    isReadyToPlay: boolean;
    duration: number;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Play: (() => void);
    Stop: (() => void);
    Pause: (() => void);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum WebCamFlags {
    FrontFacing = 1,
    AutoFocusPointSupported = 2,
  }
  export enum WebCamKind {
    WideAngle = 1,
    Telephoto = 2,
    ColorAndDepth = 3,
    UltraWideAngle = 4,
  }
  export interface WebCamDevice {
    name: string;
    isFrontFacing: boolean;
    kind: UnityEngine.WebCamKind;
    depthCameraName: string;
    isAutoFocusPointSupported: boolean;
    availableResolutions: UnityEngine.Resolution[];
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface WebCamTexture {
    isPlaying: boolean;
    deviceName: string;
    requestedFPS: number;
    requestedWidth: number;
    requestedHeight: number;
    videoRotationAngle: number;
    videoVerticallyMirrored: boolean;
    didUpdateThisFrame: boolean;
    autoFocusPoint?: any; // System.Nullable`1[UnityEngine.Vector2]
    isDepth: boolean;
    mipmapCount: number;
    graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    isReadable: boolean;
    wrapMode: UnityEngine.TextureWrapMode;
    wrapModeU: UnityEngine.TextureWrapMode;
    wrapModeV: UnityEngine.TextureWrapMode;
    wrapModeW: UnityEngine.TextureWrapMode;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    mipMapBias: number;
    texelSize: UnityEngine.Vector2;
    updateCount: any; // System.UInt32
    imageContentsHash: UnityEngine.Hash128;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Play: (() => void);
    Pause: (() => void);
    Stop: (() => void);
    GetPixel: ((x: number, y: number) => UnityEngine.Color);
    GetPixels: (() => UnityEngine.Color[]) | ((x: number, y: number, blockWidth: number, blockHeight: number) => UnityEngine.Color[]);
    GetPixels32: (() => UnityEngine.Color32[]) | ((colors: UnityEngine.Color32[]) => UnityEngine.Color32[]);
    GetNativeTexturePtr: (() => any);
    GetNativeTextureID: (() => number);
    IncrementUpdateCount: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface ICanvasRaycastFilter {
    IsRaycastLocationValid: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
  }
  export interface CanvasGroup {
    alpha: number;
    interactable: boolean;
    blocksRaycasts: boolean;
    ignoreParentGroups: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    IsRaycastLocationValid: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CanvasRenderer {
    hasPopInstruction: boolean;
    materialCount: number;
    popMaterialCount: number;
    absoluteDepth: number;
    hasMoved: boolean;
    cullTransparentMesh: boolean;
    hasRectClipping: boolean;
    relativeDepth: number;
    cull: boolean;
    isMask: boolean;
    clippingSoftness: UnityEngine.Vector2;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SetColor: ((color: UnityEngine.Color) => void);
    GetColor: (() => UnityEngine.Color);
    EnableRectClipping: ((rect: UnityEngine.Rect) => void);
    DisableRectClipping: (() => void);
    SetMaterial: ((material: UnityEngine.Material, index: number) => void) | ((material: UnityEngine.Material, texture: UnityEngine.Texture) => void);
    GetMaterial: ((index: number) => UnityEngine.Material) | (() => UnityEngine.Material);
    SetPopMaterial: ((material: UnityEngine.Material, index: number) => void);
    GetPopMaterial: ((index: number) => UnityEngine.Material);
    SetTexture: ((texture: UnityEngine.Texture) => void);
    SetAlphaTexture: ((texture: UnityEngine.Texture) => void);
    SetMesh: ((mesh: UnityEngine.Mesh) => void);
    Clear: (() => void);
    GetAlpha: (() => number);
    SetAlpha: ((alpha: number) => void);
    GetInheritedAlpha: (() => number);
    SetVertices: ((vertices: any) => void) | ((vertices: UnityEngine.UIVertex[], size: number) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CanvasRenderer_OnRequestRebuild {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface RectTransformUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum RenderMode {
    ScreenSpaceOverlay = 0,
    ScreenSpaceCamera = 1,
    WorldSpace = 2,
  }
  export enum AdditionalCanvasShaderChannels {
    None = 0,
    TexCoord1 = 1,
    TexCoord2 = 2,
    TexCoord3 = 4,
    Normal = 8,
    Tangent = 16,
  }
  export interface Canvas {
    renderMode: UnityEngine.RenderMode;
    isRootCanvas: boolean;
    pixelRect: UnityEngine.Rect;
    scaleFactor: number;
    referencePixelsPerUnit: number;
    overridePixelPerfect: boolean;
    pixelPerfect: boolean;
    planeDistance: number;
    renderOrder: number;
    overrideSorting: boolean;
    sortingOrder: number;
    targetDisplay: number;
    sortingLayerID: number;
    cachedSortingLayerValue: number;
    additionalShaderChannels: UnityEngine.AdditionalCanvasShaderChannels;
    sortingLayerName: string;
    rootCanvas: UnityEngine.Canvas;
    worldCamera: UnityEngine.Camera;
    normalizedSortingGridSize: number;
    sortingGridNormalizedSize: number;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Canvas_WillRenderCanvases {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface UISystemProfilerApi {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum UISystemProfilerApi_SampleType {
    Layout = 0,
    Render = 1,
  }
  export enum FontStyle {
    Normal = 0,
    Bold = 1,
    Italic = 2,
    BoldAndItalic = 3,
  }
  export interface GUIText {
    text: boolean;
    material: UnityEngine.Material;
    font: UnityEngine.Font;
    alignment: UnityEngine.TextAlignment;
    anchor: UnityEngine.TextAnchor;
    lineSpacing: number;
    tabSize: number;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    richText: boolean;
    color: UnityEngine.Color;
    pixelOffset: UnityEngine.Vector2;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface TextGenerationSettings {
    font: UnityEngine.Font;
    color: UnityEngine.Color;
    fontSize: number;
    lineSpacing: number;
    richText: boolean;
    scaleFactor: number;
    fontStyle: UnityEngine.FontStyle;
    textAnchor: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    updateBounds: boolean;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    generationExtents: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    generateOutOfBounds: boolean;
    Equals: ((other: UnityEngine.TextGenerationSettings) => boolean) | ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface TextGenerator {
    characterCountVisible: number;
    verts: any; // System.Collections.Generic.IList`1[UnityEngine.UIVertex]
    characters: any; // System.Collections.Generic.IList`1[UnityEngine.UICharInfo]
    lines: any; // System.Collections.Generic.IList`1[UnityEngine.UILineInfo]
    rectExtents: UnityEngine.Rect;
    vertexCount: number;
    characterCount: number;
    lineCount: number;
    fontSizeUsedForBestFit: number;
    Invalidate: (() => void);
    GetCharacters: ((characters: any) => void);
    GetLines: ((lines: any) => void);
    GetVertices: ((vertices: any) => void);
    GetPreferredWidth: ((str: string, settings: UnityEngine.TextGenerationSettings) => number);
    GetPreferredHeight: ((str: string, settings: UnityEngine.TextGenerationSettings) => number);
    PopulateWithErrors: ((str: string, settings: UnityEngine.TextGenerationSettings, context: UnityEngine.GameObject) => boolean);
    Populate: ((str: string, settings: UnityEngine.TextGenerationSettings) => boolean);
    GetVerticesArray: (() => UnityEngine.UIVertex[]);
    GetCharactersArray: (() => UnityEngine.UICharInfo[]);
    GetLinesArray: (() => UnityEngine.UILineInfo[]);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum TextAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
  }
  export enum TextAnchor {
    UpperLeft = 0,
    UpperCenter = 1,
    UpperRight = 2,
    MiddleLeft = 3,
    MiddleCenter = 4,
    MiddleRight = 5,
    LowerLeft = 6,
    LowerCenter = 7,
    LowerRight = 8,
  }
  export enum HorizontalWrapMode {
    Wrap = 0,
    Overflow = 1,
  }
  export enum VerticalWrapMode {
    Truncate = 0,
    Overflow = 1,
  }
  export interface TextMesh {
    text: string;
    font: UnityEngine.Font;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    offsetZ: number;
    alignment: UnityEngine.TextAlignment;
    anchor: UnityEngine.TextAnchor;
    characterSize: number;
    lineSpacing: number;
    tabSize: number;
    richText: boolean;
    color: UnityEngine.Color;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface CharacterInfo {
    advance: number;
    glyphWidth: number;
    glyphHeight: number;
    bearing: number;
    minY: number;
    maxY: number;
    minX: number;
    maxX: number;
    uvBottomLeft: UnityEngine.Vector2;
    uvBottomRight: UnityEngine.Vector2;
    uvTopRight: UnityEngine.Vector2;
    uvTopLeft: UnityEngine.Vector2;
    index: number;
    uv: UnityEngine.Rect;
    vert: UnityEngine.Rect;
    width: number;
    size: number;
    style: UnityEngine.FontStyle;
    flipped: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface UICharInfo {
    cursorPos: UnityEngine.Vector2;
    charWidth: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface UILineInfo {
    startCharIdx: number;
    height: number;
    topY: number;
    leading: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface UIVertex {
    position: UnityEngine.Vector3;
    normal: UnityEngine.Vector3;
    tangent: UnityEngine.Vector4;
    color: UnityEngine.Color32;
    uv0: UnityEngine.Vector4;
    uv1: UnityEngine.Vector4;
    uv2: UnityEngine.Vector4;
    uv3: UnityEngine.Vector4;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Font {
    material: UnityEngine.Material;
    fontNames: any; // System.String[]
    dynamic: boolean;
    ascent: number;
    fontSize: number;
    characterInfo: UnityEngine.CharacterInfo[];
    lineHeight: number;
    textureRebuildCallback: UnityEngine.Font_FontTextureRebuildCallback;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    HasCharacter: ((c: any) => boolean);
    RequestCharactersInTexture: ((characters: string, size: number, style: UnityEngine.FontStyle) => void) | ((characters: string, size: number) => void) | ((characters: string) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Font_FontTextureRebuildCallback {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: (() => void);
    BeginInvoke: ((callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AndroidInput {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum TouchPhase {
    Began = 0,
    Moved = 1,
    Stationary = 2,
    Ended = 3,
    Canceled = 4,
  }
  export enum IMECompositionMode {
    Auto = 0,
    On = 1,
    Off = 2,
  }
  export enum TouchType {
    Direct = 0,
    Indirect = 1,
    Stylus = 2,
  }
  export interface Touch {
    fingerId: number;
    position: UnityEngine.Vector2;
    rawPosition: UnityEngine.Vector2;
    deltaPosition: UnityEngine.Vector2;
    deltaTime: number;
    tapCount: number;
    phase: UnityEngine.TouchPhase;
    pressure: number;
    maximumPossiblePressure: number;
    type: UnityEngine.TouchType;
    altitudeAngle: number;
    azimuthAngle: number;
    radius: number;
    radiusVariance: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum DeviceOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    FaceUp = 5,
    FaceDown = 6,
  }
  export interface AccelerationEvent {
    acceleration: UnityEngine.Vector3;
    deltaTime: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Gyroscope {
    rotationRate: UnityEngine.Vector3;
    rotationRateUnbiased: UnityEngine.Vector3;
    gravity: UnityEngine.Vector3;
    userAcceleration: UnityEngine.Vector3;
    attitude: UnityEngine.Quaternion;
    enabled: boolean;
    updateInterval: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface LocationInfo {
    latitude: number;
    longitude: number;
    altitude: number;
    horizontalAccuracy: number;
    verticalAccuracy: number;
    timestamp: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum LocationServiceStatus {
    Stopped = 0,
    Initializing = 1,
    Running = 2,
    Failed = 3,
  }
  export interface LocationService {
    isEnabledByUser: boolean;
    status: UnityEngine.LocationServiceStatus;
    lastData: UnityEngine.LocationInfo;
    Start: ((desiredAccuracyInMeters: number, updateDistanceInMeters: number) => void) | ((desiredAccuracyInMeters: number) => void) | (() => void);
    Stop: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Compass {
    magneticHeading: number;
    trueHeading: number;
    headingAccuracy: number;
    rawVector: UnityEngine.Vector3;
    timestamp: number;
    enabled: boolean;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Input {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AnimationInfo {
    clip: UnityEngine.AnimationClip;
    weight: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Animator {
    isOptimizable: boolean;
    isHuman: boolean;
    hasRootMotion: boolean;
    humanScale: number;
    isInitialized: boolean;
    deltaPosition: UnityEngine.Vector3;
    deltaRotation: UnityEngine.Quaternion;
    velocity: UnityEngine.Vector3;
    angularVelocity: UnityEngine.Vector3;
    rootPosition: UnityEngine.Vector3;
    rootRotation: UnityEngine.Quaternion;
    applyRootMotion: boolean;
    linearVelocityBlending: boolean;
    animatePhysics: boolean;
    updateMode: UnityEngine.AnimatorUpdateMode;
    hasTransformHierarchy: boolean;
    gravityWeight: number;
    bodyPosition: UnityEngine.Vector3;
    bodyRotation: UnityEngine.Quaternion;
    stabilizeFeet: boolean;
    layerCount: number;
    parameters: UnityEngine.AnimatorControllerParameter[];
    parameterCount: number;
    feetPivotActive: number;
    pivotWeight: number;
    pivotPosition: UnityEngine.Vector3;
    isMatchingTarget: boolean;
    speed: number;
    targetPosition: UnityEngine.Vector3;
    targetRotation: UnityEngine.Quaternion;
    cullingMode: UnityEngine.AnimatorCullingMode;
    playbackTime: number;
    recorderStartTime: number;
    recorderStopTime: number;
    recorderMode: UnityEngine.AnimatorRecorderMode;
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    hasBoundPlayables: boolean;
    avatar: UnityEngine.Avatar;
    playableGraph: UnityEngine.Playables.PlayableGraph;
    layersAffectMassCenter: boolean;
    leftFeetBottomHeight: number;
    rightFeetBottomHeight: number;
    logWarnings: boolean;
    fireEvents: boolean;
    keepAnimatorControllerStateOnDisable: boolean;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetCurrentAnimationClipState: ((layerIndex: number) => UnityEngine.AnimationInfo[]);
    GetNextAnimationClipState: ((layerIndex: number) => UnityEngine.AnimationInfo[]);
    Stop: (() => void);
    GetFloat: ((name: string) => number) | ((id: number) => number);
    SetFloat: ((name: string, value: number) => void) | ((name: string, value: number, dampTime: number, deltaTime: number) => void) | ((id: number, value: number) => void) | ((id: number, value: number, dampTime: number, deltaTime: number) => void);
    GetBool: ((name: string) => boolean) | ((id: number) => boolean);
    SetBool: ((name: string, value: boolean) => void) | ((id: number, value: boolean) => void);
    GetInteger: ((name: string) => number) | ((id: number) => number);
    SetInteger: ((name: string, value: number) => void) | ((id: number, value: number) => void);
    SetTrigger: ((name: string) => void) | ((id: number) => void);
    ResetTrigger: ((name: string) => void) | ((id: number) => void);
    IsParameterControlledByCurve: ((name: string) => boolean) | ((id: number) => boolean);
    GetIKPosition: ((goal: UnityEngine.AvatarIKGoal) => UnityEngine.Vector3);
    SetIKPosition: ((goal: UnityEngine.AvatarIKGoal, goalPosition: UnityEngine.Vector3) => void);
    GetIKRotation: ((goal: UnityEngine.AvatarIKGoal) => UnityEngine.Quaternion);
    SetIKRotation: ((goal: UnityEngine.AvatarIKGoal, goalRotation: UnityEngine.Quaternion) => void);
    GetIKPositionWeight: ((goal: UnityEngine.AvatarIKGoal) => number);
    SetIKPositionWeight: ((goal: UnityEngine.AvatarIKGoal, value: number) => void);
    GetIKRotationWeight: ((goal: UnityEngine.AvatarIKGoal) => number);
    SetIKRotationWeight: ((goal: UnityEngine.AvatarIKGoal, value: number) => void);
    GetIKHintPosition: ((hint: UnityEngine.AvatarIKHint) => UnityEngine.Vector3);
    SetIKHintPosition: ((hint: UnityEngine.AvatarIKHint, hintPosition: UnityEngine.Vector3) => void);
    GetIKHintPositionWeight: ((hint: UnityEngine.AvatarIKHint) => number);
    SetIKHintPositionWeight: ((hint: UnityEngine.AvatarIKHint, value: number) => void);
    SetLookAtPosition: ((lookAtPosition: UnityEngine.Vector3) => void);
    SetLookAtWeight: ((weight: number) => void) | ((weight: number, bodyWeight: number) => void) | ((weight: number, bodyWeight: number, headWeight: number) => void) | ((weight: number, bodyWeight: number, headWeight: number, eyesWeight: number) => void) | ((weight: number, bodyWeight: number, headWeight: number, eyesWeight: number, clampWeight: number) => void);
    SetBoneLocalRotation: ((humanBoneId: UnityEngine.HumanBodyBones, rotation: UnityEngine.Quaternion) => void);
    GetBehaviours: ((fullPathHash: number, layerIndex: number) => UnityEngine.StateMachineBehaviour[]);
    GetLayerName: ((layerIndex: number) => string);
    GetLayerIndex: ((layerName: string) => number);
    GetLayerWeight: ((layerIndex: number) => number);
    SetLayerWeight: ((layerIndex: number, weight: number) => void);
    GetCurrentAnimatorStateInfo: ((layerIndex: number) => UnityEngine.AnimatorStateInfo);
    GetNextAnimatorStateInfo: ((layerIndex: number) => UnityEngine.AnimatorStateInfo);
    GetAnimatorTransitionInfo: ((layerIndex: number) => UnityEngine.AnimatorTransitionInfo);
    GetCurrentAnimatorClipInfoCount: ((layerIndex: number) => number);
    GetNextAnimatorClipInfoCount: ((layerIndex: number) => number);
    GetCurrentAnimatorClipInfo: ((layerIndex: number) => UnityEngine.AnimatorClipInfo[]) | ((layerIndex: number, clips: any) => void);
    GetNextAnimatorClipInfo: ((layerIndex: number) => UnityEngine.AnimatorClipInfo[]) | ((layerIndex: number, clips: any) => void);
    IsInTransition: ((layerIndex: number) => boolean);
    GetParameter: ((index: number) => UnityEngine.AnimatorControllerParameter);
    MatchTarget: ((matchPosition: UnityEngine.Vector3, matchRotation: UnityEngine.Quaternion, targetBodyPart: UnityEngine.AvatarTarget, weightMask: UnityEngine.MatchTargetWeightMask, startNormalizedTime: number) => void) | ((matchPosition: UnityEngine.Vector3, matchRotation: UnityEngine.Quaternion, targetBodyPart: UnityEngine.AvatarTarget, weightMask: UnityEngine.MatchTargetWeightMask, startNormalizedTime: number, targetNormalizedTime: number) => void) | ((matchPosition: UnityEngine.Vector3, matchRotation: UnityEngine.Quaternion, targetBodyPart: UnityEngine.AvatarTarget, weightMask: UnityEngine.MatchTargetWeightMask, startNormalizedTime: number, targetNormalizedTime: number, completeMatch: boolean) => void);
    InterruptMatchTarget: (() => void) | ((completeMatch: boolean) => void);
    ForceStateNormalizedTime: ((normalizedTime: number) => void);
    CrossFadeInFixedTime: ((stateName: string, fixedTransitionDuration: number) => void) | ((stateName: string, fixedTransitionDuration: number, layer: number) => void) | ((stateName: string, fixedTransitionDuration: number, layer: number, fixedTimeOffset: number) => void) | ((stateName: string, fixedTransitionDuration: number, layer: number, fixedTimeOffset: number, normalizedTransitionTime: number) => void) | ((stateHashName: number, fixedTransitionDuration: number, layer: number, fixedTimeOffset: number) => void) | ((stateHashName: number, fixedTransitionDuration: number, layer: number) => void) | ((stateHashName: number, fixedTransitionDuration: number) => void) | ((stateHashName: number, fixedTransitionDuration: number, layer: number, fixedTimeOffset: number, normalizedTransitionTime: number) => void);
    WriteDefaultValues: (() => void);
    CrossFade: ((stateName: string, normalizedTransitionDuration: number, layer: number, normalizedTimeOffset: number) => void) | ((stateName: string, normalizedTransitionDuration: number, layer: number) => void) | ((stateName: string, normalizedTransitionDuration: number) => void) | ((stateName: string, normalizedTransitionDuration: number, layer: number, normalizedTimeOffset: number, normalizedTransitionTime: number) => void) | ((stateHashName: number, normalizedTransitionDuration: number, layer: number, normalizedTimeOffset: number, normalizedTransitionTime: number) => void) | ((stateHashName: number, normalizedTransitionDuration: number, layer: number, normalizedTimeOffset: number) => void) | ((stateHashName: number, normalizedTransitionDuration: number, layer: number) => void) | ((stateHashName: number, normalizedTransitionDuration: number) => void);
    PlayInFixedTime: ((stateName: string, layer: number) => void) | ((stateName: string) => void) | ((stateName: string, layer: number, fixedTime: number) => void) | ((stateNameHash: number, layer: number, fixedTime: number) => void) | ((stateNameHash: number, layer: number) => void) | ((stateNameHash: number) => void);
    Play: ((stateName: string, layer: number) => void) | ((stateName: string) => void) | ((stateName: string, layer: number, normalizedTime: number) => void) | ((stateNameHash: number, layer: number, normalizedTime: number) => void) | ((stateNameHash: number, layer: number) => void) | ((stateNameHash: number) => void);
    SetTarget: ((targetIndex: UnityEngine.AvatarTarget, targetNormalizedTime: number) => void);
    IsControlled: ((transform: UnityEngine.Transform) => boolean);
    GetBoneTransform: ((humanBoneId: UnityEngine.HumanBodyBones) => UnityEngine.Transform);
    StartPlayback: (() => void);
    StopPlayback: (() => void);
    StartRecording: ((frameCount: number) => void);
    StopRecording: (() => void);
    HasState: ((layerIndex: number, stateID: number) => boolean);
    Update: ((deltaTime: number) => void);
    Rebind: (() => void);
    ApplyBuiltinRootMotion: (() => void);
    GetVector: ((name: string) => UnityEngine.Vector3) | ((id: number) => UnityEngine.Vector3);
    SetVector: ((name: string, value: UnityEngine.Vector3) => void) | ((id: number, value: UnityEngine.Vector3) => void);
    GetQuaternion: ((name: string) => UnityEngine.Quaternion) | ((id: number) => UnityEngine.Quaternion);
    SetQuaternion: ((name: string, value: UnityEngine.Quaternion) => void) | ((id: number, value: UnityEngine.Quaternion) => void);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface IAnimationClipSource {
    GetAnimationClips: ((results: any) => void);
  }
  export interface StateMachineBehaviour {
    name: string;
    hideFlags: UnityEngine.HideFlags;
    OnStateEnter: ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number) => void) | ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateUpdate: ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number) => void) | ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateExit: ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number) => void) | ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateMove: ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number) => void) | ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateIK: ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number) => void) | ((animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateMachineEnter: ((animator: UnityEngine.Animator, stateMachinePathHash: number) => void) | ((animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    OnStateMachineExit: ((animator: UnityEngine.Animator, stateMachinePathHash: number) => void) | ((animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Animations.AnimatorControllerPlayable) => void);
    SetDirty: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum PlayMode {
    StopSameLayer = 0,
    StopAll = 4,
  }
  export enum QueueMode {
    CompleteOthers = 0,
    PlayNow = 2,
  }
  export enum AnimationBlendMode {
    Blend = 0,
    Additive = 1,
  }
  export enum AnimationPlayMode {
    Stop = 0,
    Queue = 1,
    Mix = 2,
  }
  export enum AnimationCullingType {
    AlwaysAnimate = 0,
    BasedOnRenderers = 1,
    BasedOnClipBounds = 2,
    BasedOnUserBounds = 3,
  }
  export interface Animation {
    clip: UnityEngine.AnimationClip;
    playAutomatically: boolean;
    wrapMode: UnityEngine.WrapMode;
    isPlaying: boolean;
    animatePhysics: boolean;
    animateOnlyIfVisible: boolean;
    cullingType: UnityEngine.AnimationCullingType;
    localBounds: UnityEngine.Bounds;
    enabled: boolean;
    isActiveAndEnabled: boolean;
    transform: UnityEngine.Transform;
    gameObject: UnityEngine.GameObject;
    tag: string;
    rigidbody: UnityEngine.Component;
    rigidbody2D: UnityEngine.Component;
    camera: UnityEngine.Component;
    light: UnityEngine.Component;
    animation: UnityEngine.Component;
    constantForce: UnityEngine.Component;
    renderer: UnityEngine.Component;
    audio: UnityEngine.Component;
    networkView: UnityEngine.Component;
    collider: UnityEngine.Component;
    collider2D: UnityEngine.Component;
    hingeJoint: UnityEngine.Component;
    particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    Stop: (() => void) | ((name: string) => void);
    Rewind: (() => void) | ((name: string) => void);
    Sample: (() => void);
    IsPlaying: ((name: string) => boolean);
    Play: (() => boolean) | ((mode: UnityEngine.PlayMode) => boolean) | ((animation: string) => boolean) | ((animation: string, mode: UnityEngine.PlayMode) => boolean) | ((mode: UnityEngine.AnimationPlayMode) => boolean) | ((animation: string, mode: UnityEngine.AnimationPlayMode) => boolean);
    CrossFade: ((animation: string) => void) | ((animation: string, fadeLength: number) => void) | ((animation: string, fadeLength: number, mode: UnityEngine.PlayMode) => void);
    Blend: ((animation: string) => void) | ((animation: string, targetWeight: number) => void) | ((animation: string, targetWeight: number, fadeLength: number) => void);
    CrossFadeQueued: ((animation: string) => UnityEngine.AnimationState) | ((animation: string, fadeLength: number) => UnityEngine.AnimationState) | ((animation: string, fadeLength: number, queue: UnityEngine.QueueMode) => UnityEngine.AnimationState) | ((animation: string, fadeLength: number, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode) => UnityEngine.AnimationState);
    PlayQueued: ((animation: string) => UnityEngine.AnimationState) | ((animation: string, queue: UnityEngine.QueueMode) => UnityEngine.AnimationState) | ((animation: string, queue: UnityEngine.QueueMode, mode: UnityEngine.PlayMode) => UnityEngine.AnimationState);
    AddClip: ((clip: UnityEngine.AnimationClip, newName: string) => void) | ((clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number) => void) | ((clip: UnityEngine.AnimationClip, newName: string, firstFrame: number, lastFrame: number, addLoopFrame: boolean) => void);
    RemoveClip: ((clip: UnityEngine.AnimationClip) => void) | ((clipName: string) => void);
    GetClipCount: (() => number);
    SyncLayer: ((layer: number) => void);
    GetEnumerator: (() => any);
    GetClip: ((name: string) => UnityEngine.AnimationClip);
    GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
    GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
    GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponentInParent: ((t: any) => UnityEngine.Component);
    GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
    GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
    CompareTag: ((tag: string) => boolean);
    SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AnimationState {
    enabled: boolean;
    weight: number;
    wrapMode: UnityEngine.WrapMode;
    time: number;
    normalizedTime: number;
    speed: number;
    normalizedSpeed: number;
    length: number;
    layer: number;
    clip: UnityEngine.AnimationClip;
    name: string;
    blendMode: UnityEngine.AnimationBlendMode;
    AddMixingTransform: ((mix: UnityEngine.Transform) => void) | ((mix: UnityEngine.Transform, recursive: boolean) => void);
    RemoveMixingTransform: ((mix: UnityEngine.Transform) => void);
    Equals: ((o: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AnimationEvent {
    data: string;
    stringParameter: string;
    floatParameter: number;
    intParameter: number;
    objectReferenceParameter: UnityEngine.Object;
    functionName: string;
    time: number;
    messageOptions: UnityEngine.SendMessageOptions;
    isFiredByLegacy: boolean;
    isFiredByAnimator: boolean;
    animationState: UnityEngine.AnimationState;
    animatorStateInfo: UnityEngine.AnimatorStateInfo;
    animatorClipInfo: UnityEngine.AnimatorClipInfo;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AnimationClip {
    length: number;
    frameRate: number;
    wrapMode: UnityEngine.WrapMode;
    localBounds: UnityEngine.Bounds;
    legacy: boolean;
    humanMotion: boolean;
    empty: boolean;
    hasGenericRootTransform: boolean;
    hasMotionFloatCurves: boolean;
    hasMotionCurves: boolean;
    hasRootCurves: boolean;
    events: UnityEngine.AnimationEvent[];
    averageDuration: number;
    averageAngularSpeed: number;
    averageSpeed: UnityEngine.Vector3;
    apparentSpeed: number;
    isLooping: boolean;
    isHumanMotion: boolean;
    isAnimatorMotion: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    SampleAnimation: ((go: UnityEngine.GameObject, time: number) => void);
    SetCurve: ((relativePath: string, type: any, propertyName: string, curve: UnityEngine.AnimationCurve) => void);
    EnsureQuaternionContinuity: (() => void);
    ClearCurves: (() => void);
    AddEvent: ((evt: UnityEngine.AnimationEvent) => void);
    ValidateIfRetargetable: ((val: boolean) => boolean);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export enum AvatarTarget {
    Root = 0,
    Body = 1,
    LeftFoot = 2,
    RightFoot = 3,
    LeftHand = 4,
    RightHand = 5,
  }
  export enum AvatarIKGoal {
    LeftFoot = 0,
    RightFoot = 1,
    LeftHand = 2,
    RightHand = 3,
  }
  export enum AvatarIKHint {
    LeftKnee = 0,
    RightKnee = 1,
    LeftElbow = 2,
    RightElbow = 3,
  }
  export enum AnimatorControllerParameterType {
    Float = 1,
    Int = 3,
    Bool = 4,
    Trigger = 9,
  }
  export enum AnimatorRecorderMode {
    Offline = 0,
    Playback = 1,
    Record = 2,
  }
  export enum DurationUnit {
    Fixed = 0,
    Normalized = 1,
  }
  export enum AnimatorCullingMode {
    AlwaysAnimate = 0,
    CullUpdateTransforms = 1,
    CullCompletely = 2,
    BasedOnRenderers = 1,
  }
  export enum AnimatorUpdateMode {
    Normal = 0,
    AnimatePhysics = 1,
    UnscaledTime = 2,
  }
  export interface AnimatorClipInfo {
    clip: UnityEngine.AnimationClip;
    weight: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AnimatorStateInfo {
    fullPathHash: number;
    nameHash: number;
    shortNameHash: number;
    normalizedTime: number;
    length: number;
    speed: number;
    speedMultiplier: number;
    tagHash: number;
    loop: boolean;
    IsName: ((name: string) => boolean);
    IsTag: ((tag: string) => boolean);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AnimatorTransitionInfo {
    fullPathHash: number;
    nameHash: number;
    userNameHash: number;
    durationUnit: UnityEngine.DurationUnit;
    duration: number;
    normalizedTime: number;
    anyState: boolean;
    IsName: ((name: string) => boolean);
    IsUserName: ((name: string) => boolean);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface MatchTargetWeightMask {
    positionXYZWeight: UnityEngine.Vector3;
    rotationWeight: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AnimatorControllerParameter {
    name: string;
    nameHash: number;
    type: UnityEngine.AnimatorControllerParameterType;
    defaultFloat: number;
    defaultInt: number;
    defaultBool: boolean;
    Equals: ((o: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AnimationClipPair {
    originalClip: UnityEngine.AnimationClip;
    overrideClip: UnityEngine.AnimationClip;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface AnimatorOverrideController {
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    overridesCount: number;
    clips: UnityEngine.AnimationClipPair[];
    animationClips: UnityEngine.AnimationClip[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetOverrides: ((overrides: any) => void);
    ApplyOverrides: ((overrides: any) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AnimatorUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum BodyDof {
    SpineFrontBack = 0,
    SpineLeftRight = 1,
    SpineRollLeftRight = 2,
    ChestFrontBack = 3,
    ChestLeftRight = 4,
    ChestRollLeftRight = 5,
    UpperChestFrontBack = 6,
    UpperChestLeftRight = 7,
    UpperChestRollLeftRight = 8,
    LastBodyDof = 9,
  }
  export enum HeadDof {
    NeckFrontBack = 0,
    NeckLeftRight = 1,
    NeckRollLeftRight = 2,
    HeadFrontBack = 3,
    HeadLeftRight = 4,
    HeadRollLeftRight = 5,
    LeftEyeDownUp = 6,
    LeftEyeInOut = 7,
    RightEyeDownUp = 8,
    RightEyeInOut = 9,
    JawDownUp = 10,
    JawLeftRight = 11,
    LastHeadDof = 12,
  }
  export enum LegDof {
    UpperLegFrontBack = 0,
    UpperLegInOut = 1,
    UpperLegRollInOut = 2,
    LegCloseOpen = 3,
    LegRollInOut = 4,
    FootCloseOpen = 5,
    FootInOut = 6,
    ToesUpDown = 7,
    LastLegDof = 8,
  }
  export enum ArmDof {
    ShoulderDownUp = 0,
    ShoulderFrontBack = 1,
    ArmDownUp = 2,
    ArmFrontBack = 3,
    ArmRollInOut = 4,
    ForeArmCloseOpen = 5,
    ForeArmRollInOut = 6,
    HandDownUp = 7,
    HandInOut = 8,
    LastArmDof = 9,
  }
  export enum FingerDof {
    ProximalDownUp = 0,
    ProximalInOut = 1,
    IntermediateCloseOpen = 2,
    DistalCloseOpen = 3,
    LastFingerDof = 4,
  }
  export enum HumanPartDof {
    Body = 0,
    Head = 1,
    LeftLeg = 2,
    RightLeg = 3,
    LeftArm = 4,
    RightArm = 5,
    LeftThumb = 6,
    LeftIndex = 7,
    LeftMiddle = 8,
    LeftRing = 9,
    LeftLittle = 10,
    RightThumb = 11,
    RightIndex = 12,
    RightMiddle = 13,
    RightRing = 14,
    RightLittle = 15,
    LastHumanPartDof = 16,
  }
  export enum HumanBodyBones {
    Hips = 0,
    LeftUpperLeg = 1,
    RightUpperLeg = 2,
    LeftLowerLeg = 3,
    RightLowerLeg = 4,
    LeftFoot = 5,
    RightFoot = 6,
    Spine = 7,
    Chest = 8,
    UpperChest = 54,
    Neck = 9,
    Head = 10,
    LeftShoulder = 11,
    RightShoulder = 12,
    LeftUpperArm = 13,
    RightUpperArm = 14,
    LeftLowerArm = 15,
    RightLowerArm = 16,
    LeftHand = 17,
    RightHand = 18,
    LeftToes = 19,
    RightToes = 20,
    LeftEye = 21,
    RightEye = 22,
    Jaw = 23,
    LeftThumbProximal = 24,
    LeftThumbIntermediate = 25,
    LeftThumbDistal = 26,
    LeftIndexProximal = 27,
    LeftIndexIntermediate = 28,
    LeftIndexDistal = 29,
    LeftMiddleProximal = 30,
    LeftMiddleIntermediate = 31,
    LeftMiddleDistal = 32,
    LeftRingProximal = 33,
    LeftRingIntermediate = 34,
    LeftRingDistal = 35,
    LeftLittleProximal = 36,
    LeftLittleIntermediate = 37,
    LeftLittleDistal = 38,
    RightThumbProximal = 39,
    RightThumbIntermediate = 40,
    RightThumbDistal = 41,
    RightIndexProximal = 42,
    RightIndexIntermediate = 43,
    RightIndexDistal = 44,
    RightMiddleProximal = 45,
    RightMiddleIntermediate = 46,
    RightMiddleDistal = 47,
    RightRingProximal = 48,
    RightRingIntermediate = 49,
    RightRingDistal = 50,
    RightLittleProximal = 51,
    RightLittleIntermediate = 52,
    RightLittleDistal = 53,
    LastBone = 55,
  }
  export interface Avatar {
    isValid: boolean;
    isHuman: boolean;
    humanDescription: UnityEngine.HumanDescription;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface SkeletonBone {
    transformModified: number;
    name: string;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    scale: UnityEngine.Vector3;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface HumanLimit {
    useDefaultValues: boolean;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    axisLength: number;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface HumanBone {
    boneName: string;
    humanName: string;
    limit: UnityEngine.HumanLimit;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface HumanDescription {
    upperArmTwist: number;
    lowerArmTwist: number;
    upperLegTwist: number;
    lowerLegTwist: number;
    armStretch: number;
    legStretch: number;
    feetSpacing: number;
    hasTranslationDoF: boolean;
    human: UnityEngine.HumanBone[];
    skeleton: UnityEngine.SkeletonBone[];
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface AvatarBuilder {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum AvatarMaskBodyPart {
    Root = 0,
    Body = 1,
    Head = 2,
    LeftLeg = 3,
    RightLeg = 4,
    LeftArm = 5,
    RightArm = 6,
    LeftFingers = 7,
    RightFingers = 8,
    LeftFootIK = 9,
    RightFootIK = 10,
    LeftHandIK = 11,
    RightHandIK = 12,
    LastBodyPart = 13,
  }
  export interface AvatarMask {
    humanoidBodyPartCount: number;
    transformCount: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetHumanoidBodyPartActive: ((index: UnityEngine.AvatarMaskBodyPart) => boolean);
    SetHumanoidBodyPartActive: ((index: UnityEngine.AvatarMaskBodyPart, value: boolean) => void);
    AddTransformPath: ((transform: UnityEngine.Transform) => void) | ((transform: UnityEngine.Transform, recursive: boolean) => void);
    RemoveTransformPath: ((transform: UnityEngine.Transform) => void) | ((transform: UnityEngine.Transform, recursive: boolean) => void);
    GetTransformPath: ((index: number) => string);
    SetTransformPath: ((index: number, path: string) => void);
    GetTransformActive: ((index: number) => boolean);
    SetTransformActive: ((index: number, value: boolean) => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface HumanPose {
    bodyPosition: UnityEngine.Vector3;
    bodyRotation: UnityEngine.Quaternion;
    muscles: any; // System.Single[]
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface HumanPoseHandler {
    Dispose: (() => void);
    GetInternalAvatarPose: ((avatarPose: any) => void);
    SetInternalAvatarPose: ((avatarPose: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface HumanTrait {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface Motion {
    averageDuration: number;
    averageAngularSpeed: number;
    averageSpeed: UnityEngine.Vector3;
    apparentSpeed: number;
    isLooping: boolean;
    legacy: boolean;
    isHumanMotion: boolean;
    isAnimatorMotion: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    ValidateIfRetargetable: ((val: boolean) => boolean);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface RuntimeAnimatorController {
    animationClips: UnityEngine.AnimationClip[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface Event {
    rawType: UnityEngine.EventType;
    mousePosition: UnityEngine.Vector2;
    delta: UnityEngine.Vector2;
    pointerType: UnityEngine.PointerType;
    button: number;
    modifiers: UnityEngine.EventModifiers;
    pressure: number;
    clickCount: number;
    character: any; // System.Char
    keyCode: UnityEngine.KeyCode;
    displayIndex: number;
    type: UnityEngine.EventType;
    commandName: string;
    mouseRay: UnityEngine.Ray;
    shift: boolean;
    control: boolean;
    alt: boolean;
    command: boolean;
    capsLock: boolean;
    numeric: boolean;
    functionKey: boolean;
    isKey: boolean;
    isMouse: boolean;
    isScrollWheel: boolean;
    GetTypeForControl: ((controlID: number) => UnityEngine.EventType);
    GetHashCode: (() => number);
    Equals: ((obj: any) => boolean);
    ToString: (() => string);
    Use: (() => void);
    GetType: (() => any);
  }
  export enum EventType {
    MouseDown = 0,
    MouseUp = 1,
    MouseMove = 2,
    MouseDrag = 3,
    KeyDown = 4,
    KeyUp = 5,
    ScrollWheel = 6,
    Repaint = 7,
    Layout = 8,
    DragUpdated = 9,
    DragPerform = 10,
    DragExited = 15,
    Ignore = 11,
    Used = 12,
    ValidateCommand = 13,
    ExecuteCommand = 14,
    ContextClick = 16,
    MouseEnterWindow = 20,
    MouseLeaveWindow = 21,
    TouchDown = 30,
    TouchUp = 31,
    TouchMove = 32,
    TouchEnter = 33,
    TouchLeave = 34,
    TouchStationary = 35,
    mouseDown = 0,
    mouseUp = 1,
    mouseMove = 2,
    mouseDrag = 3,
    keyDown = 4,
    keyUp = 5,
    scrollWheel = 6,
    repaint = 7,
    layout = 8,
    dragUpdated = 9,
    dragPerform = 10,
    ignore = 11,
    used = 12,
  }
  export enum EventModifiers {
    None = 0,
    Shift = 1,
    Control = 2,
    Alt = 4,
    Command = 8,
    Numeric = 16,
    CapsLock = 32,
    FunctionKey = 64,
  }
  export enum PointerType {
    Mouse = 0,
    Touch = 1,
    Pen = 2,
  }
  export interface GUI {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum GUI_ToolbarButtonSize {
    Fixed = 0,
    FitToContents = 1,
  }
  export interface GUI_WindowFunction {
    Method: any; // System.Reflection.MethodInfo
    Target: any; // System.Object
    Invoke: ((id: number) => void);
    BeginInvoke: ((id: number, callback: any, object: any) => any);
    EndInvoke: ((result: any) => void);
    GetObjectData: ((info: any, context: any) => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetInvocationList: (() => any);
    DynamicInvoke: ((args: any) => any);
    Clone: (() => any);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUI_Scope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUI_GroupScope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUI_ScrollViewScope {
    scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUI_ClipScope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUIContent {
    text: string;
    image: UnityEngine.Texture;
    tooltip: string;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUIElement {
    HitTest: ((screenPosition: UnityEngine.Vector3) => boolean) | ((screenPosition: UnityEngine.Vector3, camera: UnityEngine.Camera) => boolean);
    GetScreenRect: ((camera: UnityEngine.Camera) => UnityEngine.Rect) | (() => UnityEngine.Rect);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum ScaleMode {
    StretchToFill = 0,
    ScaleAndCrop = 1,
    ScaleToFit = 2,
  }
  export enum FocusType {
    Native = 0,
    Keyboard = 1,
    Passive = 2,
  }
  export interface GUILayer {
    HitTest: ((screenPosition: UnityEngine.Vector3) => UnityEngine.GUIElement);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayout {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayout_HorizontalScope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayout_VerticalScope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayout_AreaScope {
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayout_ScrollViewScope {
    scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    Dispose: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayoutOption {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUILayoutUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUISettings {
    doubleClickSelectsWord: boolean;
    tripleClickSelectsLine: boolean;
    cursorColor: UnityEngine.Color;
    cursorFlashSpeed: number;
    selectionColor: UnityEngine.Color;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUISkin {
    font: UnityEngine.Font;
    box: UnityEngine.GUIStyle;
    label: UnityEngine.GUIStyle;
    textField: UnityEngine.GUIStyle;
    textArea: UnityEngine.GUIStyle;
    button: UnityEngine.GUIStyle;
    toggle: UnityEngine.GUIStyle;
    window: UnityEngine.GUIStyle;
    horizontalSlider: UnityEngine.GUIStyle;
    horizontalSliderThumb: UnityEngine.GUIStyle;
    verticalSlider: UnityEngine.GUIStyle;
    verticalSliderThumb: UnityEngine.GUIStyle;
    horizontalScrollbar: UnityEngine.GUIStyle;
    horizontalScrollbarThumb: UnityEngine.GUIStyle;
    horizontalScrollbarLeftButton: UnityEngine.GUIStyle;
    horizontalScrollbarRightButton: UnityEngine.GUIStyle;
    verticalScrollbar: UnityEngine.GUIStyle;
    verticalScrollbarThumb: UnityEngine.GUIStyle;
    verticalScrollbarUpButton: UnityEngine.GUIStyle;
    verticalScrollbarDownButton: UnityEngine.GUIStyle;
    scrollView: UnityEngine.GUIStyle;
    customStyles: UnityEngine.GUIStyle[];
    settings: UnityEngine.GUISettings;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    GetStyle: ((styleName: string) => UnityEngine.GUIStyle);
    FindStyle: ((styleName: string) => UnityEngine.GUIStyle);
    GetEnumerator: (() => any);
    SetDirty: (() => void);
    GetInstanceID: (() => number);
    GetHashCode: (() => number);
    Equals: ((other: any) => boolean);
    ToString: (() => string);
    GetType: (() => any);
  }
  export interface GUIStyleState {
    background: UnityEngine.Texture2D;
    textColor: UnityEngine.Color;
    scaledBackgrounds: UnityEngine.Texture2D[];
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUIStyle {
    font: UnityEngine.Font;
    imagePosition: UnityEngine.ImagePosition;
    alignment: UnityEngine.TextAnchor;
    wordWrap: boolean;
    clipping: UnityEngine.TextClipping;
    contentOffset: UnityEngine.Vector2;
    fixedWidth: number;
    fixedHeight: number;
    stretchWidth: boolean;
    stretchHeight: boolean;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    richText: boolean;
    clipOffset: UnityEngine.Vector2;
    name: string;
    normal: UnityEngine.GUIStyleState;
    hover: UnityEngine.GUIStyleState;
    active: UnityEngine.GUIStyleState;
    onNormal: UnityEngine.GUIStyleState;
    onHover: UnityEngine.GUIStyleState;
    onActive: UnityEngine.GUIStyleState;
    focused: UnityEngine.GUIStyleState;
    onFocused: UnityEngine.GUIStyleState;
    border: UnityEngine.RectOffset;
    margin: UnityEngine.RectOffset;
    padding: UnityEngine.RectOffset;
    overflow: UnityEngine.RectOffset;
    lineHeight: number;
    isHeightDependantOnWidth: boolean;
    Draw: ((position: UnityEngine.Rect, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean) => void) | ((position: UnityEngine.Rect, text: string, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean) => void) | ((position: UnityEngine.Rect, image: UnityEngine.Texture, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean) => void) | ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean) => void) | ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number) => void) | ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, on: boolean) => void) | ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, on: boolean, hover: boolean) => void);
    DrawCursor: ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, character: number) => void);
    DrawWithTextSelection: ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, firstSelectedCharacter: number, lastSelectedCharacter: number) => void);
    GetCursorPixelPosition: ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorStringIndex: number) => UnityEngine.Vector2);
    GetCursorStringIndex: ((position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorPixelPosition: UnityEngine.Vector2) => number);
    CalcSize: ((content: UnityEngine.GUIContent) => UnityEngine.Vector2);
    CalcScreenSize: ((contentSize: UnityEngine.Vector2) => UnityEngine.Vector2);
    CalcHeight: ((content: UnityEngine.GUIContent, width: number) => number);
    ToString: (() => string);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
  }
  export enum ImagePosition {
    ImageLeft = 0,
    ImageAbove = 1,
    ImageOnly = 2,
    TextOnly = 3,
  }
  export enum TextClipping {
    Overflow = 0,
    Clip = 1,
  }
  export interface GUITexture {
    color: UnityEngine.Color;
    texture: UnityEngine.Texture;
    pixelInset: UnityEngine.Rect;
    border: UnityEngine.RectOffset;
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface GUIUtility {
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export interface ExitGUIException {
    Message: string;
    Data: any; // System.Collections.IDictionary
    InnerException: any; // System.Exception
    TargetSite: any; // System.Reflection.MethodBase
    StackTrace: string;
    HelpLink: string;
    Source: string;
    HResult: number;
    GetBaseException: (() => any);
    ToString: (() => string);
    GetObjectData: ((info: any, context: any) => void);
    GetType: (() => any) | (() => any);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
  }
  export interface TextEditor {
    content: UnityEngine.GUIContent;
    text: string;
    position: UnityEngine.Rect;
    cursorIndex: number;
    selectIndex: number;
    doubleClickSnapping: UnityEngine.TextEditor_DblClickSnapping;
    altCursorPosition: number;
    hasSelection: boolean;
    SelectedText: string;
    keyboardOnScreen: UnityEngine.TouchScreenKeyboard;
    controlID: number;
    style: UnityEngine.GUIStyle;
    multiline: boolean;
    hasHorizontalCursorPos: boolean;
    isPasswordField: boolean;
    scrollOffset: UnityEngine.Vector2;
    graphicalCursorPos: UnityEngine.Vector2;
    graphicalSelectCursorPos: UnityEngine.Vector2;
    OnFocus: (() => void);
    OnLostFocus: (() => void);
    HandleKeyEvent: ((e: UnityEngine.Event) => boolean);
    DeleteLineBack: (() => boolean);
    DeleteWordBack: (() => boolean);
    DeleteWordForward: (() => boolean);
    Delete: (() => boolean);
    CanPaste: (() => boolean);
    Backspace: (() => boolean);
    SelectAll: (() => void);
    SelectNone: (() => void);
    DeleteSelection: (() => boolean);
    ReplaceSelection: ((replace: string) => void);
    Insert: ((c: any) => void);
    MoveSelectionToAltCursor: (() => void);
    MoveRight: (() => void);
    MoveLeft: (() => void);
    MoveUp: (() => void);
    MoveDown: (() => void);
    MoveLineStart: (() => void);
    MoveLineEnd: (() => void);
    MoveGraphicalLineStart: (() => void);
    MoveGraphicalLineEnd: (() => void);
    MoveTextStart: (() => void);
    MoveTextEnd: (() => void);
    MoveParagraphForward: (() => void);
    MoveParagraphBackward: (() => void);
    MoveCursorToPosition: ((cursorPosition: UnityEngine.Vector2) => void);
    MoveAltCursorToPosition: ((cursorPosition: UnityEngine.Vector2) => void);
    IsOverSelection: ((cursorPosition: UnityEngine.Vector2) => boolean);
    SelectToPosition: ((cursorPosition: UnityEngine.Vector2) => void);
    SelectLeft: (() => void);
    SelectRight: (() => void);
    SelectUp: (() => void);
    SelectDown: (() => void);
    SelectTextEnd: (() => void);
    SelectTextStart: (() => void);
    MouseDragSelectsWholeWords: ((on: boolean) => void);
    DblClickSnap: ((snapping: UnityEngine.TextEditor_DblClickSnapping) => void);
    MoveWordRight: (() => void);
    MoveToStartOfNextWord: (() => void);
    MoveToEndOfPreviousWord: (() => void);
    SelectToStartOfNextWord: (() => void);
    SelectToEndOfPreviousWord: (() => void);
    FindStartOfNextWord: ((p: number) => number);
    MoveWordLeft: (() => void);
    SelectWordRight: (() => void);
    SelectWordLeft: (() => void);
    ExpandSelectGraphicalLineStart: (() => void);
    ExpandSelectGraphicalLineEnd: (() => void);
    SelectGraphicalLineStart: (() => void);
    SelectGraphicalLineEnd: (() => void);
    SelectParagraphForward: (() => void);
    SelectParagraphBackward: (() => void);
    SelectCurrentWord: (() => void);
    SelectCurrentParagraph: (() => void);
    UpdateScrollOffsetIfNeeded: ((evt: UnityEngine.Event) => void);
    DrawCursor: ((newText: string) => void);
    SaveBackup: (() => void);
    Undo: (() => void);
    Cut: (() => boolean);
    Copy: (() => void);
    Paste: (() => boolean);
    DetectFocusChange: (() => void);
    Equals: ((obj: any) => boolean);
    GetHashCode: (() => number);
    GetType: (() => any);
    ToString: (() => string);
  }
  export enum TextEditor_DblClickSnapping {
    WORDS = 0,
    PARAGRAPHS = 1,
  }
  export namespace Animations {
    export interface AnimationPlayableBinding {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface IAnimationJob {
      ProcessAnimation: ((stream: UnityEngine.Animations.AnimationStream) => void);
      ProcessRootMotion: ((stream: UnityEngine.Animations.AnimationStream) => void);
    }
    export interface IAnimationJobPlayable {
    }
    export interface IAnimationWindowPreview {
      StartPreview: (() => void);
      StopPreview: (() => void);
      UpdatePreviewGraph: ((graph: UnityEngine.Playables.PlayableGraph) => void);
      BuildPreviewGraph: ((graph: UnityEngine.Playables.PlayableGraph, inputPlayable: UnityEngine.Playables.Playable) => UnityEngine.Playables.Playable);
    }
    export interface AimConstraint {
      weight: number;
      constraintActive: boolean;
      locked: boolean;
      rotationAtRest: UnityEngine.Vector3;
      rotationOffset: UnityEngine.Vector3;
      rotationAxis: UnityEngine.Animations.Axis;
      aimVector: UnityEngine.Vector3;
      upVector: UnityEngine.Vector3;
      worldUpVector: UnityEngine.Vector3;
      worldUpObject: UnityEngine.Transform;
      worldUpType: UnityEngine.Animations.AimConstraint_WorldUpType;
      sourceCount: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum AimConstraint_WorldUpType {
      SceneUp = 0,
      ObjectUp = 1,
      ObjectRotationUp = 2,
      Vector = 3,
      None = 4,
    }
    export interface AnimationClipPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Animations.AnimationClipPlayable) => boolean) | ((obj: any) => boolean);
      GetAnimationClip: (() => UnityEngine.AnimationClip);
      GetApplyFootIK: (() => boolean);
      SetApplyFootIK: ((value: boolean) => void);
      GetApplyPlayableIK: (() => boolean);
      SetApplyPlayableIK: ((value: boolean) => void);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationHumanStream {
      isValid: boolean;
      humanScale: number;
      leftFootHeight: number;
      rightFootHeight: number;
      bodyLocalPosition: UnityEngine.Vector3;
      bodyLocalRotation: UnityEngine.Quaternion;
      bodyPosition: UnityEngine.Vector3;
      bodyRotation: UnityEngine.Quaternion;
      leftFootVelocity: UnityEngine.Vector3;
      rightFootVelocity: UnityEngine.Vector3;
      GetMuscle: ((muscle: UnityEngine.Animations.MuscleHandle) => number);
      SetMuscle: ((muscle: UnityEngine.Animations.MuscleHandle, value: number) => void);
      ResetToStancePose: (() => void);
      GetGoalPositionFromPose: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Vector3);
      GetGoalRotationFromPose: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Quaternion);
      GetGoalLocalPosition: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Vector3);
      SetGoalLocalPosition: ((index: UnityEngine.AvatarIKGoal, pos: UnityEngine.Vector3) => void);
      GetGoalLocalRotation: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Quaternion);
      SetGoalLocalRotation: ((index: UnityEngine.AvatarIKGoal, rot: UnityEngine.Quaternion) => void);
      GetGoalPosition: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Vector3);
      SetGoalPosition: ((index: UnityEngine.AvatarIKGoal, pos: UnityEngine.Vector3) => void);
      GetGoalRotation: ((index: UnityEngine.AvatarIKGoal) => UnityEngine.Quaternion);
      SetGoalRotation: ((index: UnityEngine.AvatarIKGoal, rot: UnityEngine.Quaternion) => void);
      SetGoalWeightPosition: ((index: UnityEngine.AvatarIKGoal, value: number) => void);
      SetGoalWeightRotation: ((index: UnityEngine.AvatarIKGoal, value: number) => void);
      GetGoalWeightPosition: ((index: UnityEngine.AvatarIKGoal) => number);
      GetGoalWeightRotation: ((index: UnityEngine.AvatarIKGoal) => number);
      GetHintPosition: ((index: UnityEngine.AvatarIKHint) => UnityEngine.Vector3);
      SetHintPosition: ((index: UnityEngine.AvatarIKHint, pos: UnityEngine.Vector3) => void);
      SetHintWeightPosition: ((index: UnityEngine.AvatarIKHint, value: number) => void);
      GetHintWeightPosition: ((index: UnityEngine.AvatarIKHint) => number);
      SetLookAtPosition: ((lookAtPosition: UnityEngine.Vector3) => void);
      SetLookAtClampWeight: ((weight: number) => void);
      SetLookAtBodyWeight: ((weight: number) => void);
      SetLookAtHeadWeight: ((weight: number) => void);
      SetLookAtEyesWeight: ((weight: number) => void);
      SolveIK: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationLayerMixerPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Animations.AnimationLayerMixerPlayable) => boolean) | ((obj: any) => boolean);
      IsLayerAdditive: ((layerIndex: any) => boolean);
      SetLayerAdditive: ((layerIndex: any, value: boolean) => void);
      SetLayerMaskFromAvatarMask: ((layerIndex: any, mask: UnityEngine.AvatarMask) => void);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationMixerPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Animations.AnimationMixerPlayable) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationPlayableExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AnimationPlayableOutput {
      GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
      GetTarget: (() => UnityEngine.Animator);
      SetTarget: ((value: UnityEngine.Animator) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationScriptPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Animations.AnimationScriptPlayable) => boolean) | ((obj: any) => boolean);
      SetProcessInputs: ((value: boolean) => void);
      GetProcessInputs: (() => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationStream {
      isValid: boolean;
      deltaTime: number;
      velocity: UnityEngine.Vector3;
      angularVelocity: UnityEngine.Vector3;
      rootMotionPosition: UnityEngine.Vector3;
      rootMotionRotation: UnityEngine.Quaternion;
      isHumanStream: boolean;
      inputStreamCount: number;
      AsHuman: (() => UnityEngine.Animations.AnimationHumanStream);
      GetInputStream: ((index: number) => UnityEngine.Animations.AnimationStream);
      GetInputWeight: ((index: number) => number);
      CopyAnimationStreamMotion: ((animationStream: UnityEngine.Animations.AnimationStream) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface TransformStreamHandle {
      IsValid: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      Resolve: ((stream: UnityEngine.Animations.AnimationStream) => void);
      IsResolved: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetPosition: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetPosition: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3) => void);
      GetRotation: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Quaternion);
      SetRotation: ((stream: UnityEngine.Animations.AnimationStream, rotation: UnityEngine.Quaternion) => void);
      GetLocalPosition: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetLocalPosition: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3) => void);
      GetLocalRotation: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Quaternion);
      SetLocalRotation: ((stream: UnityEngine.Animations.AnimationStream, rotation: UnityEngine.Quaternion) => void);
      GetLocalScale: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetLocalScale: ((stream: UnityEngine.Animations.AnimationStream, scale: UnityEngine.Vector3) => void);
      GetPositionReadMask: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetRotationReadMask: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetScaleReadMask: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      SetLocalTRS: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, scale: UnityEngine.Vector3, useMask: boolean) => void);
      SetGlobalTR: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, useMask: boolean) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PropertyStreamHandle {
      IsValid: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      Resolve: ((stream: UnityEngine.Animations.AnimationStream) => void);
      IsResolved: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetFloat: ((stream: UnityEngine.Animations.AnimationStream) => number);
      SetFloat: ((stream: UnityEngine.Animations.AnimationStream, value: number) => void);
      GetInt: ((stream: UnityEngine.Animations.AnimationStream) => number);
      SetInt: ((stream: UnityEngine.Animations.AnimationStream, value: number) => void);
      GetBool: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      SetBool: ((stream: UnityEngine.Animations.AnimationStream, value: boolean) => void);
      GetReadMask: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface TransformSceneHandle {
      IsValid: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetPosition: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetPosition: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3) => void);
      GetLocalPosition: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetLocalPosition: ((stream: UnityEngine.Animations.AnimationStream, position: UnityEngine.Vector3) => void);
      GetRotation: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Quaternion);
      SetRotation: ((stream: UnityEngine.Animations.AnimationStream, rotation: UnityEngine.Quaternion) => void);
      GetLocalRotation: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Quaternion);
      SetLocalRotation: ((stream: UnityEngine.Animations.AnimationStream, rotation: UnityEngine.Quaternion) => void);
      GetLocalScale: ((stream: UnityEngine.Animations.AnimationStream) => UnityEngine.Vector3);
      SetLocalScale: ((stream: UnityEngine.Animations.AnimationStream, scale: UnityEngine.Vector3) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PropertySceneHandle {
      IsValid: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      Resolve: ((stream: UnityEngine.Animations.AnimationStream) => void);
      IsResolved: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      GetFloat: ((stream: UnityEngine.Animations.AnimationStream) => number);
      SetFloat: ((stream: UnityEngine.Animations.AnimationStream, value: number) => void);
      GetInt: ((stream: UnityEngine.Animations.AnimationStream) => number);
      SetInt: ((stream: UnityEngine.Animations.AnimationStream, value: number) => void);
      GetBool: ((stream: UnityEngine.Animations.AnimationStream) => boolean);
      SetBool: ((stream: UnityEngine.Animations.AnimationStream, value: boolean) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationSceneHandleUtility {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AnimationStreamHandleUtility {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AnimatorControllerPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      SetHandle: ((handle: UnityEngine.Playables.PlayableHandle) => void);
      Equals: ((other: UnityEngine.Animations.AnimatorControllerPlayable) => boolean) | ((obj: any) => boolean);
      GetFloat: ((name: string) => number) | ((id: number) => number);
      SetFloat: ((name: string, value: number) => void) | ((id: number, value: number) => void);
      GetBool: ((name: string) => boolean) | ((id: number) => boolean);
      SetBool: ((name: string, value: boolean) => void) | ((id: number, value: boolean) => void);
      GetInteger: ((name: string) => number) | ((id: number) => number);
      SetInteger: ((name: string, value: number) => void) | ((id: number, value: number) => void);
      SetTrigger: ((name: string) => void) | ((id: number) => void);
      ResetTrigger: ((name: string) => void) | ((id: number) => void);
      IsParameterControlledByCurve: ((name: string) => boolean) | ((id: number) => boolean);
      GetLayerCount: (() => number);
      GetLayerName: ((layerIndex: number) => string);
      GetLayerIndex: ((layerName: string) => number);
      GetLayerWeight: ((layerIndex: number) => number);
      SetLayerWeight: ((layerIndex: number, weight: number) => void);
      GetCurrentAnimatorStateInfo: ((layerIndex: number) => UnityEngine.AnimatorStateInfo);
      GetNextAnimatorStateInfo: ((layerIndex: number) => UnityEngine.AnimatorStateInfo);
      GetAnimatorTransitionInfo: ((layerIndex: number) => UnityEngine.AnimatorTransitionInfo);
      GetCurrentAnimatorClipInfo: ((layerIndex: number) => UnityEngine.AnimatorClipInfo[]) | ((layerIndex: number, clips: any) => void);
      GetNextAnimatorClipInfo: ((layerIndex: number, clips: any) => void) | ((layerIndex: number) => UnityEngine.AnimatorClipInfo[]);
      GetCurrentAnimatorClipInfoCount: ((layerIndex: number) => number);
      GetNextAnimatorClipInfoCount: ((layerIndex: number) => number);
      IsInTransition: ((layerIndex: number) => boolean);
      GetParameterCount: (() => number);
      GetParameter: ((index: number) => UnityEngine.AnimatorControllerParameter);
      CrossFadeInFixedTime: ((stateName: string, transitionDuration: number) => void) | ((stateName: string, transitionDuration: number, layer: number) => void) | ((stateName: string, transitionDuration: number, layer: number, fixedTime: number) => void) | ((stateNameHash: number, transitionDuration: number) => void) | ((stateNameHash: number, transitionDuration: number, layer: number) => void) | ((stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number) => void);
      CrossFade: ((stateName: string, transitionDuration: number) => void) | ((stateName: string, transitionDuration: number, layer: number) => void) | ((stateName: string, transitionDuration: number, layer: number, normalizedTime: number) => void) | ((stateNameHash: number, transitionDuration: number) => void) | ((stateNameHash: number, transitionDuration: number, layer: number) => void) | ((stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number) => void);
      PlayInFixedTime: ((stateName: string) => void) | ((stateName: string, layer: number) => void) | ((stateName: string, layer: number, fixedTime: number) => void) | ((stateNameHash: number) => void) | ((stateNameHash: number, layer: number) => void) | ((stateNameHash: number, layer: number, fixedTime: number) => void);
      Play: ((stateName: string) => void) | ((stateName: string, layer: number) => void) | ((stateName: string, layer: number, normalizedTime: number) => void) | ((stateNameHash: number) => void) | ((stateNameHash: number, layer: number) => void) | ((stateNameHash: number, layer: number, normalizedTime: number) => void);
      HasState: ((layerIndex: number, stateID: number) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum CustomStreamPropertyType {
      Float = 5,
      Bool = 6,
      Int = 10,
    }
    export interface AnimatorJobExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum Axis {
      None = 0,
      X = 1,
      Y = 2,
      Z = 4,
    }
    export interface ConstraintSource {
      sourceTransform: UnityEngine.Transform;
      weight: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface IConstraint {
      weight: number;
      constraintActive: boolean;
      locked: boolean;
      sourceCount: number;
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
    }
    export interface PositionConstraint {
      weight: number;
      translationAtRest: UnityEngine.Vector3;
      translationOffset: UnityEngine.Vector3;
      translationAxis: UnityEngine.Animations.Axis;
      constraintActive: boolean;
      locked: boolean;
      sourceCount: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface RotationConstraint {
      weight: number;
      rotationAtRest: UnityEngine.Vector3;
      rotationOffset: UnityEngine.Vector3;
      rotationAxis: UnityEngine.Animations.Axis;
      constraintActive: boolean;
      locked: boolean;
      sourceCount: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScaleConstraint {
      weight: number;
      scaleAtRest: UnityEngine.Vector3;
      scaleOffset: UnityEngine.Vector3;
      scalingAxis: UnityEngine.Animations.Axis;
      constraintActive: boolean;
      locked: boolean;
      sourceCount: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface LookAtConstraint {
      weight: number;
      roll: number;
      constraintActive: boolean;
      locked: boolean;
      rotationAtRest: UnityEngine.Vector3;
      rotationOffset: UnityEngine.Vector3;
      worldUpObject: UnityEngine.Transform;
      useUpObject: boolean;
      sourceCount: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface MuscleHandle {
      humanPartDof: UnityEngine.HumanPartDof;
      dof: number;
      name: string;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ParentConstraint {
      weight: number;
      constraintActive: boolean;
      locked: boolean;
      sourceCount: number;
      translationAtRest: UnityEngine.Vector3;
      rotationAtRest: UnityEngine.Vector3;
      translationOffsets: UnityEngine.Vector3[];
      rotationOffsets: UnityEngine.Vector3[];
      translationAxis: UnityEngine.Animations.Axis;
      rotationAxis: UnityEngine.Animations.Axis;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetTranslationOffset: ((index: number) => UnityEngine.Vector3);
      SetTranslationOffset: ((index: number, value: UnityEngine.Vector3) => void);
      GetRotationOffset: ((index: number) => UnityEngine.Vector3);
      SetRotationOffset: ((index: number, value: UnityEngine.Vector3) => void);
      GetSources: ((sources: any) => void);
      SetSources: ((sources: any) => void);
      AddSource: ((source: UnityEngine.Animations.ConstraintSource) => number);
      RemoveSource: ((index: number) => void);
      GetSource: ((index: number) => UnityEngine.Animations.ConstraintSource);
      SetSource: ((index: number, source: UnityEngine.Animations.ConstraintSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace Apple {
    export enum FrameCaptureDestination {
      DevTools = 1,
      GPUTraceDocument = 2,
    }
    export interface FrameCapture {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export namespace ReplayKit {
      export interface ReplayKit {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface ReplayKit_BroadcastStatusCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((hasStarted: boolean, errorMessage: string) => void);
        BeginInvoke: ((hasStarted: boolean, errorMessage: string, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace TV {
      export interface Remote {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
  }
  export namespace Assertions {
    export interface Assert {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AssertionException {
      Message: string;
      Data: any; // System.Collections.IDictionary
      InnerException: any; // System.Exception
      TargetSite: any; // System.Reflection.MethodBase
      StackTrace: string;
      HelpLink: string;
      Source: string;
      HResult: number;
      GetBaseException: (() => any);
      ToString: (() => string);
      GetObjectData: ((info: any, context: any) => void);
      GetType: (() => any) | (() => any);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
    }
    export namespace Comparers {
      export interface FloatComparer {
        Equals: ((a: number, b: number) => boolean) | ((obj: any) => boolean);
        GetHashCode: ((obj: number) => number) | (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace Must {
      export interface MustExtensions {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
  }
  export namespace Audio {
    export interface AudioClipPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Audio.AudioClipPlayable) => boolean) | ((obj: any) => boolean);
      GetClip: (() => UnityEngine.AudioClip);
      SetClip: ((value: UnityEngine.AudioClip) => void);
      GetLooped: (() => boolean);
      SetLooped: ((value: boolean) => void);
      IsPlaying: (() => boolean);
      IsChannelPlaying: (() => boolean);
      GetStartDelay: (() => number);
      GetPauseDelay: (() => number);
      Seek: ((startTime: number, startDelay: number) => void) | ((startTime: number, startDelay: number, duration: number) => void);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum AudioMixerUpdateMode {
      Normal = 0,
      UnscaledTime = 1,
    }
    export interface AudioMixer {
      outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
      updateMode: UnityEngine.Audio.AudioMixerUpdateMode;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      FindSnapshot: ((name: string) => UnityEngine.Audio.AudioMixerSnapshot);
      FindMatchingGroups: ((subPath: string) => UnityEngine.Audio.AudioMixerGroup[]);
      TransitionToSnapshots: ((snapshots: UnityEngine.Audio.AudioMixerSnapshot[], weights: any, timeToReach: number) => void);
      SetFloat: ((name: string, value: number) => boolean);
      ClearFloat: ((name: string) => boolean);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AudioMixerGroup {
      audioMixer: UnityEngine.Audio.AudioMixer;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AudioMixerPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      Equals: ((other: UnityEngine.Audio.AudioMixerPlayable) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AudioMixerSnapshot {
      audioMixer: UnityEngine.Audio.AudioMixer;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      TransitionTo: ((timeToReach: number) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AudioPlayableBinding {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AudioPlayableOutput {
      GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
      GetTarget: (() => UnityEngine.AudioSource);
      SetTarget: ((value: UnityEngine.AudioSource) => void);
      GetEvaluateOnSeek: (() => boolean);
      SetEvaluateOnSeek: ((value: boolean) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace Diagnostics {
    export enum ForcedCrashCategory {
      AccessViolation = 0,
      FatalError = 1,
      Abort = 2,
      PureVirtualFunction = 3,
      MonoAbort = 4,
    }
    export interface Utils {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface PlayerConnection {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Events {
    export enum PersistentListenerMode {
      EventDefined = 0,
      Void = 1,
      Object = 2,
      Int = 3,
      Float = 4,
      String = 5,
      Bool = 6,
    }
    export enum UnityEventCallState {
      Off = 0,
      EditorAndRuntime = 1,
      RuntimeOnly = 2,
    }
    export interface UnityEventBase {
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface UnityAction {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface UnityEvent {
      AddListener: ((call: UnityEngine.Events.UnityAction) => void);
      RemoveListener: ((call: UnityEngine.Events.UnityAction) => void);
      Invoke: (() => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
  }
  export namespace EventSystems {
    export interface AxisEventData {
      moveVector: UnityEngine.Vector2;
      moveDir: UnityEngine.EventSystems.MoveDirection;
      currentInputModule: UnityEngine.EventSystems.BaseInputModule;
      selectedObject: UnityEngine.GameObject;
      used: boolean;
      Reset: (() => void);
      Use: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AbstractEventData {
      used: boolean;
      Reset: (() => void);
      Use: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface BaseEventData {
      currentInputModule: UnityEngine.EventSystems.BaseInputModule;
      selectedObject: UnityEngine.GameObject;
      used: boolean;
      Reset: (() => void);
      Use: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface PointerEventData {
      pointerEnter: UnityEngine.GameObject;
      lastPress: UnityEngine.GameObject;
      rawPointerPress: UnityEngine.GameObject;
      pointerDrag: UnityEngine.GameObject;
      pointerClick: UnityEngine.GameObject;
      pointerCurrentRaycast: UnityEngine.EventSystems.RaycastResult;
      pointerPressRaycast: UnityEngine.EventSystems.RaycastResult;
      eligibleForClick: boolean;
      pointerId: number;
      position: UnityEngine.Vector2;
      delta: UnityEngine.Vector2;
      pressPosition: UnityEngine.Vector2;
      worldPosition: UnityEngine.Vector3;
      worldNormal: UnityEngine.Vector3;
      clickTime: number;
      clickCount: number;
      scrollDelta: UnityEngine.Vector2;
      useDragThreshold: boolean;
      dragging: boolean;
      button: UnityEngine.EventSystems.PointerEventData_InputButton;
      enterEventCamera: UnityEngine.Camera;
      pressEventCamera: UnityEngine.Camera;
      pointerPress: UnityEngine.GameObject;
      currentInputModule: UnityEngine.EventSystems.BaseInputModule;
      selectedObject: UnityEngine.GameObject;
      used: boolean;
      hovered: any; // System.Collections.Generic.List`1[UnityEngine.GameObject]
      IsPointerMoving: (() => boolean);
      IsScrolling: (() => boolean);
      ToString: (() => string);
      Reset: (() => void);
      Use: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum EventHandle {
      Unused = 0,
      Used = 1,
    }
    export interface IEventSystemHandler {
    }
    export interface IPointerEnterHandler {
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IPointerExitHandler {
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IPointerDownHandler {
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IPointerUpHandler {
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IPointerClickHandler {
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IBeginDragHandler {
      OnBeginDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IInitializePotentialDragHandler {
      OnInitializePotentialDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IDragHandler {
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IEndDragHandler {
      OnEndDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IDropHandler {
      OnDrop: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IScrollHandler {
      OnScroll: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
    }
    export interface IUpdateSelectedHandler {
      OnUpdateSelected: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
    }
    export interface ISelectHandler {
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
    }
    export interface IDeselectHandler {
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
    }
    export interface IMoveHandler {
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
    }
    export interface ISubmitHandler {
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
    }
    export interface ICancelHandler {
      OnCancel: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
    }
    export interface EventSystem {
      sendNavigationEvents: boolean;
      pixelDragThreshold: number;
      currentInputModule: UnityEngine.EventSystems.BaseInputModule;
      firstSelectedGameObject: UnityEngine.GameObject;
      currentSelectedGameObject: UnityEngine.GameObject;
      lastSelectedGameObject: UnityEngine.GameObject;
      isFocused: boolean;
      alreadySelecting: boolean;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      UpdateModules: (() => void);
      SetSelectedGameObject: ((selected: UnityEngine.GameObject, pointer: UnityEngine.EventSystems.BaseEventData) => void) | ((selected: UnityEngine.GameObject) => void);
      RaycastAll: ((eventData: UnityEngine.EventSystems.PointerEventData, raycastResults: any) => void);
      IsPointerOverGameObject: (() => boolean) | ((pointerId: number) => boolean);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface EventTrigger {
      delegates: any; // System.Collections.Generic.List`1[UnityEngine.EventSystems.EventTrigger+Entry]
      triggers: any; // System.Collections.Generic.List`1[UnityEngine.EventSystems.EventTrigger+Entry]
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrop: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnScroll: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnUpdateSelected: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnInitializePotentialDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnBeginDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnEndDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnCancel: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum EventTriggerType {
      PointerEnter = 0,
      PointerExit = 1,
      PointerDown = 2,
      PointerUp = 3,
      PointerClick = 4,
      Drag = 5,
      Drop = 6,
      Scroll = 7,
      UpdateSelected = 8,
      Select = 9,
      Deselect = 10,
      Move = 11,
      InitializePotentialDrag = 12,
      BeginDrag = 13,
      EndDrag = 14,
      Submit = 15,
      Cancel = 16,
    }
    export interface ExecuteEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface BaseInput {
      compositionString: string;
      imeCompositionMode: UnityEngine.IMECompositionMode;
      compositionCursorPos: UnityEngine.Vector2;
      mousePresent: boolean;
      mousePosition: UnityEngine.Vector2;
      mouseScrollDelta: UnityEngine.Vector2;
      touchSupported: boolean;
      touchCount: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetMouseButtonDown: ((button: number) => boolean);
      GetMouseButtonUp: ((button: number) => boolean);
      GetMouseButton: ((button: number) => boolean);
      GetTouch: ((index: number) => UnityEngine.Touch);
      GetAxisRaw: ((axisName: string) => number);
      GetButtonDown: ((buttonName: string) => boolean);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface BaseInputModule {
      input: UnityEngine.EventSystems.BaseInput;
      inputOverride: UnityEngine.EventSystems.BaseInput;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Process: (() => void);
      IsPointerOverGameObject: ((pointerId: number) => boolean);
      ShouldActivateModule: (() => boolean);
      DeactivateModule: (() => void);
      ActivateModule: (() => void);
      UpdateModule: (() => void);
      IsModuleSupported: (() => boolean);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PointerInputModule {
      input: UnityEngine.EventSystems.BaseInput;
      inputOverride: UnityEngine.EventSystems.BaseInput;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      IsPointerOverGameObject: ((pointerId: number) => boolean);
      ToString: (() => string);
      Process: (() => void);
      ShouldActivateModule: (() => boolean);
      DeactivateModule: (() => void);
      ActivateModule: (() => void);
      UpdateModule: (() => void);
      IsModuleSupported: (() => boolean);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface StandaloneInputModule {
      inputMode: UnityEngine.EventSystems.StandaloneInputModule_InputMode;
      allowActivationOnMobileDevice: boolean;
      forceModuleActive: boolean;
      inputActionsPerSecond: number;
      repeatDelay: number;
      horizontalAxis: string;
      verticalAxis: string;
      submitButton: string;
      cancelButton: string;
      input: UnityEngine.EventSystems.BaseInput;
      inputOverride: UnityEngine.EventSystems.BaseInput;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      UpdateModule: (() => void);
      IsModuleSupported: (() => boolean);
      ShouldActivateModule: (() => boolean);
      ActivateModule: (() => void);
      DeactivateModule: (() => void);
      Process: (() => void);
      IsPointerOverGameObject: ((pointerId: number) => boolean);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface TouchInputModule {
      allowActivationOnStandalone: boolean;
      forceModuleActive: boolean;
      input: UnityEngine.EventSystems.BaseInput;
      inputOverride: UnityEngine.EventSystems.BaseInput;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      UpdateModule: (() => void);
      IsModuleSupported: (() => boolean);
      ShouldActivateModule: (() => boolean);
      Process: (() => void);
      DeactivateModule: (() => void);
      ToString: (() => string);
      IsPointerOverGameObject: ((pointerId: number) => boolean);
      ActivateModule: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export enum MoveDirection {
      Left = 0,
      Up = 1,
      Right = 2,
      Down = 3,
      None = 4,
    }
    export interface RaycastResult {
      gameObject: UnityEngine.GameObject;
      isValid: boolean;
      module: UnityEngine.EventSystems.BaseRaycaster;
      distance: number;
      index: number;
      depth: number;
      sortingLayer: number;
      sortingOrder: number;
      worldPosition: UnityEngine.Vector3;
      worldNormal: UnityEngine.Vector3;
      screenPosition: UnityEngine.Vector2;
      displayIndex: number;
      Clear: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface BaseRaycaster {
      eventCamera: UnityEngine.Camera;
      priority: number;
      sortOrderPriority: number;
      renderOrderPriority: number;
      rootRaycaster: UnityEngine.EventSystems.BaseRaycaster;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Raycast: ((eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: any) => void);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface Physics2DRaycaster {
      eventCamera: UnityEngine.Camera;
      depth: number;
      finalEventMask: number;
      eventMask: UnityEngine.LayerMask;
      maxRayIntersections: number;
      priority: number;
      sortOrderPriority: number;
      renderOrderPriority: number;
      rootRaycaster: UnityEngine.EventSystems.BaseRaycaster;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Raycast: ((eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: any) => void);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface PhysicsRaycaster {
      eventCamera: UnityEngine.Camera;
      depth: number;
      finalEventMask: number;
      eventMask: UnityEngine.LayerMask;
      maxRayIntersections: number;
      priority: number;
      sortOrderPriority: number;
      renderOrderPriority: number;
      rootRaycaster: UnityEngine.EventSystems.BaseRaycaster;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Raycast: ((eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: any) => void);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface UIBehaviour {
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum PointerEventData_InputButton {
      Left = 0,
      Right = 1,
      Middle = 2,
    }
    export enum PointerEventData_FramePressState {
      Pressed = 0,
      Released = 1,
      PressedAndReleased = 2,
      NotChanged = 3,
    }
    export interface EventTrigger_TriggerEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: UnityEngine.EventSystems.BaseEventData) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface EventTrigger_Entry {
      eventID: UnityEngine.EventSystems.EventTriggerType;
      callback: UnityEngine.EventSystems.EventTrigger_TriggerEvent;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface PointerInputModule_MouseButtonEventData {
      buttonState: UnityEngine.EventSystems.PointerEventData_FramePressState;
      buttonData: UnityEngine.EventSystems.PointerEventData;
      PressedThisFrame: (() => boolean);
      ReleasedThisFrame: (() => boolean);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum StandaloneInputModule_InputMode {
      Mouse = 0,
      Buttons = 1,
    }
  }
  export namespace Experimental {
    export namespace Animations {
      export enum AnimationStreamSource {
        DefaultValues = 0,
        PreviousInputs = 1,
      }
      export interface AnimationPlayableOutputExtensions {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace Audio {
      export interface AudioSampleProvider {
        id: any; // System.UInt32
        trackIndex: any; // System.UInt16
        owner: UnityEngine.Object;
        valid: boolean;
        channelCount: any; // System.UInt16
        sampleRate: any; // System.UInt32
        maxSampleFrameCount: any; // System.UInt32
        availableSampleFrameCount: any; // System.UInt32
        freeSampleFrameCount: any; // System.UInt32
        freeSampleFrameCountLowThreshold: any; // System.UInt32
        enableSampleFramesAvailableEvents: boolean;
        enableSilencePadding: boolean;
        Dispose: (() => void);
        ConsumeSampleFrames: ((sampleFrames: any) => any);
        SetSampleFramesAvailableNativeHandler: ((handler: UnityEngine.Experimental.Audio.AudioSampleProvider_SampleFramesEventNativeFunction, userData: any) => void);
        ClearSampleFramesAvailableNativeHandler: (() => void);
        SetSampleFramesOverflowNativeHandler: ((handler: UnityEngine.Experimental.Audio.AudioSampleProvider_SampleFramesEventNativeFunction, userData: any) => void);
        ClearSampleFramesOverflowNativeHandler: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface AudioSampleProvider_ConsumeSampleFramesNativeFunction {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((providerId: any, interleavedSampleFrames: any, sampleFrameCount: any) => any);
        BeginInvoke: ((providerId: any, interleavedSampleFrames: any, sampleFrameCount: any, callback: any, object: any) => any);
        EndInvoke: ((result: any) => any);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface AudioSampleProvider_SampleFramesHandler {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((provider: UnityEngine.Experimental.Audio.AudioSampleProvider, sampleFrameCount: any) => void);
        BeginInvoke: ((provider: UnityEngine.Experimental.Audio.AudioSampleProvider, sampleFrameCount: any, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface AudioSampleProvider_SampleFramesEventNativeFunction {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((userData: any, providerId: any, sampleFrameCount: any) => void);
        BeginInvoke: ((userData: any, providerId: any, sampleFrameCount: any, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace GlobalIllumination {
      export enum LightType {
        Directional = 0,
        Point = 1,
        Spot = 2,
        Rectangle = 3,
        Disc = 4,
        SpotPyramidShape = 5,
        SpotBoxShape = 6,
      }
      export enum LightMode {
        Realtime = 0,
        Mixed = 1,
        Baked = 2,
        Unknown = 3,
      }
      export enum FalloffType {
        InverseSquared = 0,
        InverseSquaredNoRangeAttenuation = 1,
        Linear = 2,
        Legacy = 3,
        Undefined = 4,
      }
      export enum AngularFalloffType {
        LUT = 0,
        AnalyticAndInnerAngle = 1,
      }
      export interface LinearColor {
        red: number;
        green: number;
        blue: number;
        intensity: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface DirectionalLight {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        penumbraWidthRadian: number;
        direction: UnityEngine.Vector3;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface PointLight {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        sphereRadius: number;
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface SpotLight {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        sphereRadius: number;
        coneAngle: number;
        innerConeAngle: number;
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        angularFalloff: UnityEngine.Experimental.GlobalIllumination.AngularFalloffType;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface RectangleLight {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        width: number;
        height: number;
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface DiscLight {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        radius: number;
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface SpotLightBoxShape {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        width: number;
        height: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface SpotLightPyramidShape {
        instanceID: number;
        shadow: boolean;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        position: UnityEngine.Vector3;
        orientation: UnityEngine.Quaternion;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        range: number;
        angle: number;
        aspectRatio: number;
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface Cookie {
        instanceID: number;
        scale: number;
        sizes: UnityEngine.Vector2;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface LightDataGI {
        instanceID: number;
        cookieID: number;
        cookieScale: number;
        color: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        indirectColor: UnityEngine.Experimental.GlobalIllumination.LinearColor;
        orientation: UnityEngine.Quaternion;
        position: UnityEngine.Vector3;
        range: number;
        coneAngle: number;
        innerConeAngle: number;
        shape0: number;
        shape1: number;
        type: UnityEngine.Experimental.GlobalIllumination.LightType;
        mode: UnityEngine.Experimental.GlobalIllumination.LightMode;
        shadow: any; // System.Byte
        falloff: UnityEngine.Experimental.GlobalIllumination.FalloffType;
        InitNoBake: ((lightInstanceID: number) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface LightmapperUtils {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface Lightmapping {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface Lightmapping_RequestLightsDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((requests: UnityEngine.Light[], lightsOutput: any) => void);
        BeginInvoke: ((requests: UnityEngine.Light[], lightsOutput: any, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface RenderSettings {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace Playables {
      export interface CameraPlayable {
        GetHandle: (() => UnityEngine.Playables.PlayableHandle);
        Equals: ((other: UnityEngine.Experimental.Playables.CameraPlayable) => boolean) | ((obj: any) => boolean);
        GetCamera: (() => UnityEngine.Camera);
        SetCamera: ((value: UnityEngine.Camera) => void);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface MaterialEffectPlayable {
        GetHandle: (() => UnityEngine.Playables.PlayableHandle);
        Equals: ((other: UnityEngine.Experimental.Playables.MaterialEffectPlayable) => boolean) | ((obj: any) => boolean);
        GetMaterial: (() => UnityEngine.Material);
        SetMaterial: ((value: UnityEngine.Material) => void);
        GetPass: (() => number);
        SetPass: ((value: number) => void);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface TextureMixerPlayable {
        GetHandle: (() => UnityEngine.Playables.PlayableHandle);
        Equals: ((other: UnityEngine.Experimental.Playables.TextureMixerPlayable) => boolean) | ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface TexturePlayableBinding {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface TexturePlayableOutput {
        GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
        GetTarget: (() => UnityEngine.RenderTexture);
        SetTarget: ((value: UnityEngine.RenderTexture) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
    }
    export namespace Rendering {
      export interface IScriptableRuntimeReflectionSystem {
        TickRealtimeProbes: (() => boolean);
      }
      export interface ScriptableRuntimeReflectionSystem {
        TickRealtimeProbes: (() => boolean);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface ScriptableRuntimeReflectionSystemSettings {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface ExternalGPUProfiler {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum WaitForPresentSyncPoint {
        BeginFrame = 0,
        EndFrame = 1,
      }
      export enum GraphicsJobsSyncPoint {
        EndOfFrame = 0,
        AfterScriptUpdate = 1,
        AfterScriptLateUpdate = 2,
        WaitForPresent = 3,
      }
      export interface GraphicsDeviceSettings {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum TextureCreationFlags {
        None = 0,
        MipChain = 1,
        Crunch = 64,
      }
      export enum FormatUsage {
        Sample = 0,
        Linear = 1,
        Sparse = 2,
        Render = 4,
        Blend = 5,
        GetPixels = 6,
        SetPixels = 7,
        SetPixels32 = 8,
        ReadPixels = 9,
        LoadStore = 10,
        MSAA2x = 11,
        MSAA4x = 12,
        MSAA8x = 13,
        StencilSampling = 15,
      }
      export enum DefaultFormat {
        LDR = 0,
        HDR = 1,
      }
      export enum GraphicsFormat {
        None = 0,
        R8_SRGB = 1,
        R8G8_SRGB = 2,
        R8G8B8_SRGB = 3,
        R8G8B8A8_SRGB = 4,
        R8_UNorm = 5,
        R8G8_UNorm = 6,
        R8G8B8_UNorm = 7,
        R8G8B8A8_UNorm = 8,
        R8_SNorm = 9,
        R8G8_SNorm = 10,
        R8G8B8_SNorm = 11,
        R8G8B8A8_SNorm = 12,
        R8_UInt = 13,
        R8G8_UInt = 14,
        R8G8B8_UInt = 15,
        R8G8B8A8_UInt = 16,
        R8_SInt = 17,
        R8G8_SInt = 18,
        R8G8B8_SInt = 19,
        R8G8B8A8_SInt = 20,
        R16_UNorm = 21,
        R16G16_UNorm = 22,
        R16G16B16_UNorm = 23,
        R16G16B16A16_UNorm = 24,
        R16_SNorm = 25,
        R16G16_SNorm = 26,
        R16G16B16_SNorm = 27,
        R16G16B16A16_SNorm = 28,
        R16_UInt = 29,
        R16G16_UInt = 30,
        R16G16B16_UInt = 31,
        R16G16B16A16_UInt = 32,
        R16_SInt = 33,
        R16G16_SInt = 34,
        R16G16B16_SInt = 35,
        R16G16B16A16_SInt = 36,
        R32_UInt = 37,
        R32G32_UInt = 38,
        R32G32B32_UInt = 39,
        R32G32B32A32_UInt = 40,
        R32_SInt = 41,
        R32G32_SInt = 42,
        R32G32B32_SInt = 43,
        R32G32B32A32_SInt = 44,
        R16_SFloat = 45,
        R16G16_SFloat = 46,
        R16G16B16_SFloat = 47,
        R16G16B16A16_SFloat = 48,
        R32_SFloat = 49,
        R32G32_SFloat = 50,
        R32G32B32_SFloat = 51,
        R32G32B32A32_SFloat = 52,
        B8G8R8_SRGB = 56,
        B8G8R8A8_SRGB = 57,
        B8G8R8_UNorm = 58,
        B8G8R8A8_UNorm = 59,
        B8G8R8_SNorm = 60,
        B8G8R8A8_SNorm = 61,
        B8G8R8_UInt = 62,
        B8G8R8A8_UInt = 63,
        B8G8R8_SInt = 64,
        B8G8R8A8_SInt = 65,
        R4G4B4A4_UNormPack16 = 66,
        B4G4R4A4_UNormPack16 = 67,
        R5G6B5_UNormPack16 = 68,
        B5G6R5_UNormPack16 = 69,
        R5G5B5A1_UNormPack16 = 70,
        B5G5R5A1_UNormPack16 = 71,
        A1R5G5B5_UNormPack16 = 72,
        E5B9G9R9_UFloatPack32 = 73,
        B10G11R11_UFloatPack32 = 74,
        A2B10G10R10_UNormPack32 = 75,
        A2B10G10R10_UIntPack32 = 76,
        A2B10G10R10_SIntPack32 = 77,
        A2R10G10B10_UNormPack32 = 78,
        A2R10G10B10_UIntPack32 = 79,
        A2R10G10B10_SIntPack32 = 80,
        A2R10G10B10_XRSRGBPack32 = 81,
        A2R10G10B10_XRUNormPack32 = 82,
        R10G10B10_XRSRGBPack32 = 83,
        R10G10B10_XRUNormPack32 = 84,
        A10R10G10B10_XRSRGBPack32 = 85,
        A10R10G10B10_XRUNormPack32 = 86,
        RGB_DXT1_SRGB = 96,
        RGBA_DXT1_SRGB = 96,
        RGB_DXT1_UNorm = 97,
        RGBA_DXT1_UNorm = 97,
        RGBA_DXT3_SRGB = 98,
        RGBA_DXT3_UNorm = 99,
        RGBA_DXT5_SRGB = 100,
        RGBA_DXT5_UNorm = 101,
        R_BC4_UNorm = 102,
        R_BC4_SNorm = 103,
        RG_BC5_UNorm = 104,
        RG_BC5_SNorm = 105,
        RGB_BC6H_UFloat = 106,
        RGB_BC6H_SFloat = 107,
        RGBA_BC7_SRGB = 108,
        RGBA_BC7_UNorm = 109,
        RGB_PVRTC_2Bpp_SRGB = 110,
        RGB_PVRTC_2Bpp_UNorm = 111,
        RGB_PVRTC_4Bpp_SRGB = 112,
        RGB_PVRTC_4Bpp_UNorm = 113,
        RGBA_PVRTC_2Bpp_SRGB = 114,
        RGBA_PVRTC_2Bpp_UNorm = 115,
        RGBA_PVRTC_4Bpp_SRGB = 116,
        RGBA_PVRTC_4Bpp_UNorm = 117,
        RGB_ETC_UNorm = 118,
        RGB_ETC2_SRGB = 119,
        RGB_ETC2_UNorm = 120,
        RGB_A1_ETC2_SRGB = 121,
        RGB_A1_ETC2_UNorm = 122,
        RGBA_ETC2_SRGB = 123,
        RGBA_ETC2_UNorm = 124,
        R_EAC_UNorm = 125,
        R_EAC_SNorm = 126,
        RG_EAC_UNorm = 127,
        RG_EAC_SNorm = 128,
        RGBA_ASTC4X4_SRGB = 129,
        RGBA_ASTC4X4_UNorm = 130,
        RGBA_ASTC5X5_SRGB = 131,
        RGBA_ASTC5X5_UNorm = 132,
        RGBA_ASTC6X6_SRGB = 133,
        RGBA_ASTC6X6_UNorm = 134,
        RGBA_ASTC8X8_SRGB = 135,
        RGBA_ASTC8X8_UNorm = 136,
        RGBA_ASTC10X10_SRGB = 137,
        RGBA_ASTC10X10_UNorm = 138,
        RGBA_ASTC12X12_SRGB = 139,
        RGBA_ASTC12X12_UNorm = 140,
        RGBA_ASTC4X4_UFloat = 145,
        RGBA_ASTC5X5_UFloat = 146,
        RGBA_ASTC6X6_UFloat = 147,
        RGBA_ASTC8X8_UFloat = 148,
        RGBA_ASTC10X10_UFloat = 149,
        RGBA_ASTC12X12_UFloat = 150,
      }
      export enum RayTracingMode {
        Off = 0,
        Static = 1,
        DynamicTransform = 2,
        DynamicGeometry = 3,
      }
      export interface GraphicsFormatUtility {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface RayTracingAccelerationStructure {
        Dispose: (() => void);
        Release: (() => void);
        Build: (() => void) | ((relativeOrigin: UnityEngine.Vector3) => void);
        Update: (() => void) | ((relativeOrigin: UnityEngine.Vector3) => void);
        AddInstance: ((targetRenderer: UnityEngine.Renderer, subMeshMask?: any, subMeshTransparencyFlags?: any, enableTriangleCulling?: boolean, frontTriangleCounterClockwise?: boolean, mask?: any) => void) | ((aabbBuffer: UnityEngine.GraphicsBuffer, numElements: any, material: UnityEngine.Material, isCutOff: boolean, enableTriangleCulling?: boolean, frontTriangleCounterClockwise?: boolean, mask?: any, reuseBounds?: boolean) => void) | ((aabbBuffer: UnityEngine.GraphicsBuffer, numElements: any, material: UnityEngine.Material, instanceTransform: UnityEngine.Matrix4x4, isCutOff: boolean, enableTriangleCulling?: boolean, frontTriangleCounterClockwise?: boolean, mask?: any, reuseBounds?: boolean) => void);
        UpdateInstanceTransform: ((renderer: UnityEngine.Renderer) => void);
        GetSize: (() => any);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum RayTracingAccelerationStructure_RayTracingModeMask {
        Nothing = 0,
        Static = 2,
        DynamicTransform = 4,
        DynamicGeometry = 8,
        Everything = 14,
      }
      export enum RayTracingAccelerationStructure_ManagementMode {
        Manual = 0,
        Automatic = 1,
      }
      export interface RayTracingAccelerationStructure_RASSettings {
        managementMode: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure_ManagementMode;
        rayTracingModeMask: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure_RayTracingModeMask;
        layerMask: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface ShaderWarmupSetup {
        vdecl: UnityEngine.Rendering.VertexAttributeDescriptor[];
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface ShaderWarmup {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface RayTracingShader {
        maxRecursionDepth: number;
        name: string;
        hideFlags: UnityEngine.HideFlags;
        SetFloat: ((nameID: number, val: number) => void) | ((name: string, val: number) => void);
        SetInt: ((nameID: number, val: number) => void) | ((name: string, val: number) => void);
        SetVector: ((nameID: number, val: UnityEngine.Vector4) => void) | ((name: string, val: UnityEngine.Vector4) => void);
        SetMatrix: ((nameID: number, val: UnityEngine.Matrix4x4) => void) | ((name: string, val: UnityEngine.Matrix4x4) => void);
        SetVectorArray: ((nameID: number, values: UnityEngine.Vector4[]) => void) | ((name: string, values: UnityEngine.Vector4[]) => void);
        SetMatrixArray: ((nameID: number, values: UnityEngine.Matrix4x4[]) => void) | ((name: string, values: UnityEngine.Matrix4x4[]) => void);
        SetTexture: ((nameID: number, texture: UnityEngine.Texture) => void) | ((name: string, texture: UnityEngine.Texture) => void);
        SetBuffer: ((nameID: number, buffer: UnityEngine.ComputeBuffer) => void) | ((nameID: number, buffer: UnityEngine.GraphicsBuffer) => void) | ((name: string, buffer: UnityEngine.ComputeBuffer) => void) | ((name: string, buffer: UnityEngine.GraphicsBuffer) => void);
        SetAccelerationStructure: ((nameID: number, accelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure) => void) | ((name: string, accelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure) => void);
        SetShaderPass: ((passName: string) => void);
        SetTextureFromGlobal: ((nameID: number, globalTextureNameID: number) => void) | ((name: string, globalTextureName: string) => void);
        Dispatch: ((rayGenFunctionName: string, width: number, height: number, depth: number, camera?: UnityEngine.Camera) => void);
        SetFloats: ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
        SetInts: ((name: string, values: any) => void) | ((nameID: number, values: any) => void);
        SetBool: ((name: string, val: boolean) => void) | ((nameID: number, val: boolean) => void);
        SetConstantBuffer: ((nameID: number, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((name: string, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((nameID: number, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((name: string, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
        GetInstanceID: (() => number);
        GetHashCode: (() => number);
        Equals: ((other: any) => boolean);
        ToString: (() => string);
        GetType: (() => any);
      }
    }
    export namespace Video {
      export interface VideoClipPlayable {
        GetHandle: (() => UnityEngine.Playables.PlayableHandle);
        Equals: ((other: UnityEngine.Experimental.Video.VideoClipPlayable) => boolean) | ((obj: any) => boolean);
        GetClip: (() => UnityEngine.Video.VideoClip);
        SetClip: ((value: UnityEngine.Video.VideoClip) => void);
        GetLooped: (() => boolean);
        SetLooped: ((value: boolean) => void);
        IsPlaying: (() => boolean);
        GetStartDelay: (() => number);
        GetPauseDelay: (() => number);
        Seek: ((startTime: number, startDelay: number) => void) | ((startTime: number, startDelay: number, duration: number) => void);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface VideoPlayerExtensions {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
  }
  export namespace iOS {
    export interface ADBannerView {
      loaded: boolean;
      visible: boolean;
      layout: UnityEngine.iOS.ADBannerView_Layout;
      position: UnityEngine.Vector2;
      size: UnityEngine.Vector2;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum ADBannerView_Layout {
      Top = 0,
      Bottom = 1,
      TopLeft = 0,
      TopRight = 4,
      TopCenter = 8,
      BottomLeft = 1,
      BottomRight = 5,
      BottomCenter = 9,
      CenterLeft = 2,
      CenterRight = 6,
      Center = 10,
      Manual = -1,
    }
    export enum ADBannerView_Type {
      Banner = 0,
      MediumRect = 1,
    }
    export interface ADBannerView_BannerWasClickedDelegate {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ADBannerView_BannerWasLoadedDelegate {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ADBannerView_BannerFailedToLoadDelegate {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ADInterstitialAd {
      loaded: boolean;
      Show: (() => void);
      ReloadAd: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ADInterstitialAd_InterstitialWasLoadedDelegate {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ADInterstitialAd_InterstitialWasViewedDelegate {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum DeviceGeneration {
      Unknown = 0,
      iPhone = 1,
      iPhone3G = 2,
      iPhone3GS = 3,
      iPodTouch1Gen = 4,
      iPodTouch2Gen = 5,
      iPodTouch3Gen = 6,
      iPad1Gen = 7,
      iPhone4 = 8,
      iPodTouch4Gen = 9,
      iPad2Gen = 10,
      iPhone4S = 11,
      iPad3Gen = 12,
      iPhone5 = 13,
      iPodTouch5Gen = 14,
      iPadMini1Gen = 15,
      iPad4Gen = 16,
      iPhone5C = 17,
      iPhone5S = 18,
      iPadAir1 = 19,
      iPadMini2Gen = 20,
      iPhone6 = 21,
      iPhone6Plus = 22,
      iPadMini3Gen = 23,
      iPadAir2 = 24,
      iPhone6S = 25,
      iPhone6SPlus = 26,
      iPadPro1Gen = 27,
      iPadMini4Gen = 28,
      iPhoneSE1Gen = 29,
      iPadPro10Inch1Gen = 30,
      iPhone7 = 31,
      iPhone7Plus = 32,
      iPodTouch6Gen = 33,
      iPad5Gen = 34,
      iPadPro2Gen = 35,
      iPadPro10Inch2Gen = 36,
      iPhone8 = 37,
      iPhone8Plus = 38,
      iPhoneX = 39,
      iPhoneXS = 40,
      iPhoneXSMax = 41,
      iPhoneXR = 42,
      iPadPro11Inch = 43,
      iPadPro3Gen = 44,
      iPad6Gen = 45,
      iPadAir3Gen = 46,
      iPadMini5Gen = 47,
      iPhone11 = 48,
      iPhone11Pro = 49,
      iPhone11ProMax = 50,
      iPodTouch7Gen = 51,
      iPad7Gen = 52,
      iPhoneSE2Gen = 53,
      iPadPro11Inch2Gen = 54,
      iPadPro4Gen = 55,
      iPhoneUnknown = 10001,
      iPadUnknown = 10002,
      iPodTouchUnknown = 10003,
    }
    export enum ActivityIndicatorStyle {
      DontShow = -1,
      WhiteLarge = 0,
      White = 1,
      Gray = 2,
    }
    export interface Device {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum CalendarIdentifier {
      GregorianCalendar = 0,
      BuddhistCalendar = 1,
      ChineseCalendar = 2,
      HebrewCalendar = 3,
      IslamicCalendar = 4,
      IslamicCivilCalendar = 5,
      JapaneseCalendar = 6,
      RepublicOfChinaCalendar = 7,
      PersianCalendar = 8,
      IndianCalendar = 9,
      ISO8601Calendar = 10,
    }
    export enum CalendarUnit {
      Era = 2,
      Year = 4,
      Month = 8,
      Day = 16,
      Hour = 32,
      Minute = 64,
      Second = 128,
      Week = 256,
      Weekday = 512,
      WeekdayOrdinal = 1024,
      Quarter = 2048,
    }
    export enum NotificationType {
      None = 0,
      Badge = 1,
      Sound = 2,
      Alert = 4,
    }
    export interface LocalNotification {
      timeZone: string;
      repeatCalendar: UnityEngine.iOS.CalendarIdentifier;
      repeatInterval: UnityEngine.iOS.CalendarUnit;
      fireDate: any; // System.DateTime
      alertBody: string;
      alertTitle: string;
      alertAction: string;
      alertLaunchImage: string;
      soundName: string;
      applicationIconBadgeNumber: number;
      userInfo: any; // System.Collections.IDictionary
      hasAction: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface RemoteNotification {
      alertBody: string;
      alertTitle: string;
      soundName: string;
      applicationIconBadgeNumber: number;
      userInfo: any; // System.Collections.IDictionary
      hasAction: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface NotificationServices {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum SystemGestureDeferMode {
      None = 0,
      TopEdge = 1,
      LeftEdge = 2,
      BottomEdge = 4,
      RightEdge = 8,
      All = 15,
    }
    export interface OnDemandResourcesRequest {
      error: string;
      loadingPriority: number;
      isDone: boolean;
      progress: number;
      priority: number;
      allowSceneActivation: boolean;
      GetResourcePath: ((resourceName: string) => string);
      Dispose: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface OnDemandResources {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Jobs {
    export interface IJobParallelForTransform {
      Execute: ((index: number, transform: UnityEngine.Jobs.TransformAccess) => void);
    }
    export interface IJobParallelForTransformExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface TransformAccess {
      position: UnityEngine.Vector3;
      rotation: UnityEngine.Quaternion;
      localPosition: UnityEngine.Vector3;
      localRotation: UnityEngine.Quaternion;
      localScale: UnityEngine.Vector3;
      localToWorldMatrix: UnityEngine.Matrix4x4;
      worldToLocalMatrix: UnityEngine.Matrix4x4;
      isValid: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface TransformAccessArray {
      isCreated: boolean;
      capacity: number;
      length: number;
      Dispose: (() => void);
      Add: ((transform: UnityEngine.Transform) => void);
      RemoveAtSwapBack: ((index: number) => void);
      SetTransforms: ((transforms: UnityEngine.Transform[]) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace LowLevel {
    export interface PlayerLoopSystem {
      type: any; // System.Type
      subSystemList: UnityEngine.LowLevel.PlayerLoopSystem[];
      updateDelegate: UnityEngine.LowLevel.PlayerLoopSystem_UpdateFunction;
      updateFunction: any; // System.IntPtr
      loopConditionFunction: any; // System.IntPtr
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface PlayerLoopSystem_UpdateFunction {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface PlayerLoop {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Networking {
    export namespace PlayerConnection {
      export enum ConnectionTarget {
        None = 0,
        Player = 1,
        Editor = 2,
      }
      export interface IConnectionState {
        connectedToTarget: UnityEngine.Networking.PlayerConnection.ConnectionTarget;
        connectionName: string;
      }
      export interface MessageEventArgs {
        playerId: number;
        data: any; // System.Byte[]
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface IEditorPlayerConnection {
        Register: ((messageId: any, callback: any) => void);
        Unregister: ((messageId: any, callback: any) => void);
        DisconnectAll: (() => void);
        RegisterConnection: ((callback: any) => void);
        RegisterDisconnection: ((callback: any) => void);
        UnregisterConnection: ((callback: any) => void);
        UnregisterDisconnection: ((callback: any) => void);
        Send: ((messageId: any, data: any) => void);
        TrySend: ((messageId: any, data: any) => boolean);
      }
      export interface PlayerConnection {
        isConnected: boolean;
        name: string;
        hideFlags: UnityEngine.HideFlags;
        OnEnable: (() => void);
        Register: ((messageId: any, callback: any) => void);
        Unregister: ((messageId: any, callback: any) => void);
        RegisterConnection: ((callback: any) => void);
        RegisterDisconnection: ((callback: any) => void);
        UnregisterConnection: ((callback: any) => void);
        UnregisterDisconnection: ((callback: any) => void);
        Send: ((messageId: any, data: any) => void);
        TrySend: ((messageId: any, data: any) => boolean);
        BlockUntilRecvMsg: ((messageId: any, timeout: number) => boolean);
        DisconnectAll: (() => void);
        SetDirty: (() => void);
        GetInstanceID: (() => number);
        GetHashCode: (() => number);
        Equals: ((other: any) => boolean);
        ToString: (() => string);
        GetType: (() => any);
      }
    }
  }
  export namespace Playables {
    export interface FrameData {
      frameId: any; // System.UInt64
      deltaTime: number;
      weight: number;
      effectiveWeight: number;
      effectiveParentDelay: number;
      effectiveParentSpeed: number;
      effectiveSpeed: number;
      evaluationType: UnityEngine.Playables.FrameData_EvaluationType;
      seekOccurred: boolean;
      timeLooped: boolean;
      timeHeld: boolean;
      output: UnityEngine.Playables.PlayableOutput;
      effectivePlayState: UnityEngine.Playables.PlayState;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum FrameData_EvaluationType {
      Evaluate = 0,
      Playback = 1,
    }
    export interface INotification {
      id: UnityEngine.PropertyName;
    }
    export interface INotificationReceiver {
      OnNotify: ((origin: UnityEngine.Playables.Playable, notification: UnityEngine.Playables.INotification, context: any) => void);
    }
    export interface IPlayable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
    }
    export interface IPlayableBehaviour {
      OnGraphStart: ((playable: UnityEngine.Playables.Playable) => void);
      OnGraphStop: ((playable: UnityEngine.Playables.Playable) => void);
      OnPlayableCreate: ((playable: UnityEngine.Playables.Playable) => void);
      OnPlayableDestroy: ((playable: UnityEngine.Playables.Playable) => void);
      OnBehaviourPlay: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      OnBehaviourPause: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      PrepareFrame: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      ProcessFrame: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData, playerData: any) => void);
    }
    export interface IPlayableOutput {
      GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
    }
    export interface Notification {
      id: UnityEngine.PropertyName;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum DirectorWrapMode {
      Hold = 0,
      Loop = 1,
      None = 2,
    }
    export interface Playable {
      GetHandle: (() => UnityEngine.Playables.PlayableHandle);
      GetPlayableType: (() => any);
      Equals: ((other: UnityEngine.Playables.Playable) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface IPlayableAsset {
      duration: number;
      outputs: any; // System.Collections.Generic.IEnumerable`1[UnityEngine.Playables.PlayableBinding]
      CreatePlayable: ((graph: UnityEngine.Playables.PlayableGraph, owner: UnityEngine.GameObject) => UnityEngine.Playables.Playable);
    }
    export interface PlayableAsset {
      duration: number;
      outputs: any; // System.Collections.Generic.IEnumerable`1[UnityEngine.Playables.PlayableBinding]
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CreatePlayable: ((graph: UnityEngine.Playables.PlayableGraph, owner: UnityEngine.GameObject) => UnityEngine.Playables.Playable);
      SetDirty: (() => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PlayableBehaviour {
      OnGraphStart: ((playable: UnityEngine.Playables.Playable) => void);
      OnGraphStop: ((playable: UnityEngine.Playables.Playable) => void);
      OnPlayableCreate: ((playable: UnityEngine.Playables.Playable) => void);
      OnPlayableDestroy: ((playable: UnityEngine.Playables.Playable) => void);
      OnBehaviourDelay: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      OnBehaviourPlay: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      OnBehaviourPause: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      PrepareData: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      PrepareFrame: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData) => void);
      ProcessFrame: ((playable: UnityEngine.Playables.Playable, info: UnityEngine.Playables.FrameData, playerData: any) => void);
      Clone: (() => any);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum DataStreamType {
      Animation = 0,
      Audio = 1,
      Texture = 2,
      None = 3,
    }
    export interface PlayableBinding {
      streamName: string;
      sourceObject: UnityEngine.Object;
      outputTargetType: any; // System.Type
      sourceBindingType: any; // System.Type
      streamType: UnityEngine.Playables.DataStreamType;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum PlayableTraversalMode {
      Mix = 0,
      Passthrough = 1,
    }
    export interface PlayableExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum DirectorUpdateMode {
      DSPClock = 0,
      GameTime = 1,
      UnscaledGameTime = 2,
      Manual = 3,
    }
    export interface PlayableGraph {
      GetRootPlayable: ((index: number) => UnityEngine.Playables.Playable);
      GetOutput: ((index: number) => UnityEngine.Playables.PlayableOutput);
      Evaluate: (() => void) | ((deltaTime: number) => void);
      Destroy: (() => void);
      IsValid: (() => boolean);
      IsPlaying: (() => boolean);
      IsDone: (() => boolean);
      Play: (() => void);
      Stop: (() => void);
      GetTimeUpdateMode: (() => UnityEngine.Playables.DirectorUpdateMode);
      SetTimeUpdateMode: ((value: UnityEngine.Playables.DirectorUpdateMode) => void);
      GetResolver: (() => UnityEngine.IExposedPropertyTable);
      SetResolver: ((value: UnityEngine.IExposedPropertyTable) => void);
      GetPlayableCount: (() => number);
      GetRootPlayableCount: (() => number);
      GetOutputCount: (() => number);
      GetEditorName: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum PlayState {
      Paused = 0,
      Playing = 1,
      Delayed = 2,
    }
    export interface PlayableHandle {
      Equals: ((p: any) => boolean) | ((other: UnityEngine.Playables.PlayableHandle) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PlayableOutput {
      GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
      GetPlayableOutputType: (() => any);
      Equals: ((other: UnityEngine.Playables.PlayableOutput) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PlayableOutputExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface PlayableOutputHandle {
      GetHashCode: (() => number);
      Equals: ((p: any) => boolean) | ((other: UnityEngine.Playables.PlayableOutputHandle) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScriptPlayableBinding {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ScriptPlayableOutput {
      GetHandle: (() => UnityEngine.Playables.PlayableOutputHandle);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AnimationPlayableUtilities {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace PlayerLoop {
    export interface TimeUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface TimeUpdate_WaitForLastPresentationAndUpdateTime {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_PlayerUpdateTime {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_UpdateCameraMotionVectors {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_DirectorSampleTime {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_AsyncUploadTimeSlicedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_SynchronizeState {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_SynchronizeInputs {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Initialization_XREarlyUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PollPlayerConnection {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ProfilerStartFrame {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PollHtcsPlayerConnection {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_GpuTimestamp {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_AnalyticsCoreStatsUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UnityWebRequestUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateStreamingManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ExecuteMainThreadJobs {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ProcessMouseInWindow {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ClearIntermediateRenderers {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ClearLines {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PresentBeforeUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ResetFrameStatsAfterPresent {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateAsyncReadbackManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateTextureStreamingManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdatePreloading {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_RendererNotifyInvisible {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PlayerCleanupCachedData {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateMainGameViewRect {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateCanvasRectTransform {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateInputManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ProcessRemoteInput {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_XRUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ScriptRunDelayedStartupFrame {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_UpdateKinect {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_DeliverIosPlatformEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_DispatchEventQueueEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PhysicsResetInterpolatedTransformPosition {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_SpriteAtlasManagerUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_TangoUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_ARCoreUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface EarlyUpdate_PerformanceAnalyticsUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_ClearLines {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_DirectorFixedSampleTime {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_AudioFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_ScriptRunBehaviourFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_DirectorFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_LegacyFixedAnimationUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_XRFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_PhysicsFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_Physics2DFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_DirectorFixedUpdatePostPhysics {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_ScriptRunDelayedFixedFrameRate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FixedUpdate_NewInputFixedUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_PhysicsUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_Physics2DUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_CheckTexFieldInput {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_IMGUISendQueuedEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_SendMouseEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_AIUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_WindUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_UpdateVideo {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreUpdate_NewInputUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Update {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Update_ScriptRunBehaviourUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Update_DirectorUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Update_ScriptRunDelayedDynamicFrameRate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Update_ScriptRunDelayedTasks {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_AIUpdatePostScript {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_DirectorUpdateAnimationBegin {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_LegacyAnimationUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_DirectorUpdateAnimationEnd {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_DirectorDeferredEvaluate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_UIElementsUpdatePanels {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_UpdateNetworkManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_UpdateMasterServerInterface {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_UNetUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_EndGraphicsJobsAfterScriptUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_ParticleSystemBeginUpdateAll {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_ScriptRunBehaviourLateUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PreLateUpdate_ConstraintManagerUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PlayerSendFrameStarted {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateRectTransform {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateCanvasRectTransform {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PlayerUpdateCanvases {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateAudio {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateVideo {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_DirectorLateUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ScriptRunDelayedDynamicFrameRate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_VFXUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ParticleSystemEndUpdateAll {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_EndGraphicsJobsAfterScriptLateUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateSubstance {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateCustomRenderTextures {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateAllRenderers {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateLightProbeProxyVolumes {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_EnlightenRuntimeUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateAllSkinnedMeshes {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ProcessWebSendMessages {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_SortingGroupsUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateVideoTextures {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_DirectorRenderImage {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PlayerEmitCanvasGeometry {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_FinishFrameRendering {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_BatchModeUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PlayerSendFrameComplete {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateCaptureScreenshot {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PresentAfterDraw {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ClearImmediateRenderers {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_XRPostPresent {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_UpdateResolution {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_InputEndFrame {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_GUIClearEvents {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ShaderHandleErrors {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ResetInputAxis {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ThreadedLoadingDebug {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ProfilerSynchronizeStats {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_MemoryFrameMaintenance {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ExecuteGameCenterCallbacks {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_ProfilerEndFrame {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PlayerSendFramePostPresent {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PhysicsSkinnedClothBeginUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_PhysicsSkinnedClothFinishUpdate {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PostLateUpdate_TriggerEndOfFrameCallbacks {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace Profiling {
    export enum ProfilerArea {
      CPU = 0,
      GPU = 1,
      Rendering = 2,
      Memory = 3,
      Audio = 4,
      Video = 5,
      Physics = 6,
      Physics2D = 7,
      NetworkMessages = 8,
      NetworkOperations = 9,
      UI = 10,
      UIDetails = 11,
      GlobalIllumination = 12,
      VirtualTexturing = 13,
    }
    export interface Profiler {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Recorder {
      isValid: boolean;
      enabled: boolean;
      elapsedNanoseconds: any; // System.Int64
      gpuElapsedNanoseconds: any; // System.Int64
      sampleBlockCount: number;
      gpuSampleBlockCount: number;
      FilterToCurrentThread: (() => void);
      CollectFromAllThreads: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Sampler {
      isValid: boolean;
      name: string;
      GetRecorder: (() => UnityEngine.Profiling.Recorder);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface CustomSampler {
      isValid: boolean;
      name: string;
      Begin: (() => void) | ((targetObject: UnityEngine.Object) => void);
      End: (() => void);
      GetRecorder: (() => UnityEngine.Profiling.Recorder);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export namespace Experimental {
      export interface DebugScreenCapture {
        rawImageDataReference: any; // Unity.Collections.NativeArray`1[System.Byte]
        imageFormat: UnityEngine.TextureFormat;
        width: number;
        height: number;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
    }
    export namespace Memory {
      export namespace Experimental {
        export enum CaptureFlags {
          ManagedObjects = 1,
          NativeObjects = 2,
          NativeAllocations = 4,
          NativeAllocationSites = 8,
          NativeStackTraces = 16,
        }
        export interface MetaData {
          content: string;
          platform: string;
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
        export interface MemoryProfiler {
          Equals: ((obj: any) => boolean);
          GetHashCode: (() => number);
          GetType: (() => any);
          ToString: (() => string);
        }
      }
    }
  }
  export namespace Rendering {
    export interface AsyncGPUReadbackRequest {
      done: boolean;
      hasError: boolean;
      layerCount: number;
      layerDataSize: number;
      width: number;
      height: number;
      depth: number;
      Update: (() => void);
      WaitForCompletion: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AsyncGPUReadback {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum SynchronisationStage {
      VertexProcessing = 0,
      PixelProcessing = 1,
    }
    export interface GPUFence {
      passed: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PIX {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum ShaderHardwareTier {
      Tier1 = 0,
      Tier2 = 1,
      Tier3 = 2,
    }
    export enum IndexFormat {
      UInt16 = 0,
      UInt32 = 1,
    }
    export enum MeshUpdateFlags {
      Default = 0,
      DontValidateIndices = 1,
      DontResetBoneBounds = 2,
      DontNotifyMeshUsers = 4,
      DontRecalculateBounds = 8,
    }
    export enum VertexAttributeFormat {
      Float32 = 0,
      Float16 = 1,
      UNorm8 = 2,
      SNorm8 = 3,
      UNorm16 = 4,
      SNorm16 = 5,
      UInt8 = 6,
      SInt8 = 7,
      UInt16 = 8,
      SInt16 = 9,
      UInt32 = 10,
      SInt32 = 11,
    }
    export enum VertexAttribute {
      Position = 0,
      Normal = 1,
      Tangent = 2,
      Color = 3,
      TexCoord0 = 4,
      TexCoord1 = 5,
      TexCoord2 = 6,
      TexCoord3 = 7,
      TexCoord4 = 8,
      TexCoord5 = 9,
      TexCoord6 = 10,
      TexCoord7 = 11,
      BlendWeight = 12,
      BlendIndices = 13,
    }
    export enum OpaqueSortMode {
      Default = 0,
      FrontToBack = 1,
      NoDistanceSort = 2,
    }
    export enum RenderQueue {
      Background = 1000,
      Geometry = 2000,
      AlphaTest = 2450,
      GeometryLast = 2500,
      Transparent = 3000,
      Overlay = 4000,
    }
    export enum RenderBufferLoadAction {
      Load = 0,
      Clear = 1,
      DontCare = 2,
    }
    export enum RenderBufferStoreAction {
      Store = 0,
      Resolve = 1,
      StoreAndResolve = 2,
      DontCare = 3,
    }
    export enum FastMemoryFlags {
      None = 0,
      SpillTop = 1,
      SpillBottom = 2,
    }
    export enum BlendMode {
      Zero = 0,
      One = 1,
      DstColor = 2,
      SrcColor = 3,
      OneMinusDstColor = 4,
      SrcAlpha = 5,
      OneMinusSrcColor = 6,
      DstAlpha = 7,
      OneMinusDstAlpha = 8,
      SrcAlphaSaturate = 9,
      OneMinusSrcAlpha = 10,
    }
    export enum BlendOp {
      Add = 0,
      Subtract = 1,
      ReverseSubtract = 2,
      Min = 3,
      Max = 4,
      LogicalClear = 5,
      LogicalSet = 6,
      LogicalCopy = 7,
      LogicalCopyInverted = 8,
      LogicalNoop = 9,
      LogicalInvert = 10,
      LogicalAnd = 11,
      LogicalNand = 12,
      LogicalOr = 13,
      LogicalNor = 14,
      LogicalXor = 15,
      LogicalEquivalence = 16,
      LogicalAndReverse = 17,
      LogicalAndInverted = 18,
      LogicalOrReverse = 19,
      LogicalOrInverted = 20,
      Multiply = 21,
      Screen = 22,
      Overlay = 23,
      Darken = 24,
      Lighten = 25,
      ColorDodge = 26,
      ColorBurn = 27,
      HardLight = 28,
      SoftLight = 29,
      Difference = 30,
      Exclusion = 31,
      HSLHue = 32,
      HSLSaturation = 33,
      HSLColor = 34,
      HSLLuminosity = 35,
    }
    export enum CompareFunction {
      Disabled = 0,
      Never = 1,
      Less = 2,
      Equal = 3,
      LessEqual = 4,
      Greater = 5,
      NotEqual = 6,
      GreaterEqual = 7,
      Always = 8,
    }
    export enum CullMode {
      Off = 0,
      Front = 1,
      Back = 2,
    }
    export enum ColorWriteMask {
      Alpha = 1,
      Blue = 2,
      Green = 4,
      Red = 8,
      All = 15,
    }
    export enum StencilOp {
      Keep = 0,
      Zero = 1,
      Replace = 2,
      IncrementSaturate = 3,
      DecrementSaturate = 4,
      Invert = 5,
      IncrementWrap = 6,
      DecrementWrap = 7,
    }
    export enum AmbientMode {
      Skybox = 0,
      Trilight = 1,
      Flat = 3,
      Custom = 4,
    }
    export enum DefaultReflectionMode {
      Skybox = 0,
      Custom = 1,
    }
    export enum ReflectionCubemapCompression {
      Uncompressed = 0,
      Compressed = 1,
      Auto = 2,
    }
    export enum CameraEvent {
      BeforeDepthTexture = 0,
      AfterDepthTexture = 1,
      BeforeDepthNormalsTexture = 2,
      AfterDepthNormalsTexture = 3,
      BeforeGBuffer = 4,
      AfterGBuffer = 5,
      BeforeLighting = 6,
      AfterLighting = 7,
      BeforeFinalPass = 8,
      AfterFinalPass = 9,
      BeforeForwardOpaque = 10,
      AfterForwardOpaque = 11,
      BeforeImageEffectsOpaque = 12,
      AfterImageEffectsOpaque = 13,
      BeforeSkybox = 14,
      AfterSkybox = 15,
      BeforeForwardAlpha = 16,
      AfterForwardAlpha = 17,
      BeforeImageEffects = 18,
      AfterImageEffects = 19,
      AfterEverything = 20,
      BeforeReflections = 21,
      AfterReflections = 22,
      BeforeHaloAndLensFlares = 23,
      AfterHaloAndLensFlares = 24,
    }
    export enum LightEvent {
      BeforeShadowMap = 0,
      AfterShadowMap = 1,
      BeforeScreenspaceMask = 2,
      AfterScreenspaceMask = 3,
      BeforeShadowMapPass = 4,
      AfterShadowMapPass = 5,
    }
    export enum ShadowMapPass {
      PointlightPositiveX = 1,
      PointlightNegativeX = 2,
      PointlightPositiveY = 4,
      PointlightNegativeY = 8,
      PointlightPositiveZ = 16,
      PointlightNegativeZ = 32,
      DirectionalCascade0 = 64,
      DirectionalCascade1 = 128,
      DirectionalCascade2 = 256,
      DirectionalCascade3 = 512,
      Spotlight = 1024,
      Pointlight = 63,
      Directional = 960,
      All = 2047,
    }
    export enum BuiltinRenderTextureType {
      PropertyName = -4,
      BufferPtr = -3,
      RenderTexture = -2,
      BindableTexture = -1,
      None = 0,
      CurrentActive = 1,
      CameraTarget = 2,
      Depth = 3,
      DepthNormals = 4,
      ResolvedDepth = 5,
      PrepassNormalsSpec = 7,
      PrepassLight = 8,
      PrepassLightSpec = 9,
      GBuffer0 = 10,
      GBuffer1 = 11,
      GBuffer2 = 12,
      GBuffer3 = 13,
      Reflections = 14,
      MotionVectors = 15,
      GBuffer4 = 16,
      GBuffer5 = 17,
      GBuffer6 = 18,
      GBuffer7 = 19,
    }
    export enum PassType {
      Normal = 0,
      Vertex = 1,
      VertexLM = 2,
      VertexLMRGBM = 3,
      ForwardBase = 4,
      ForwardAdd = 5,
      LightPrePassBase = 6,
      LightPrePassFinal = 7,
      ShadowCaster = 8,
      Deferred = 10,
      Meta = 11,
      MotionVectors = 12,
      ScriptableRenderPipeline = 13,
      ScriptableRenderPipelineDefaultUnlit = 14,
    }
    export enum ShadowCastingMode {
      Off = 0,
      On = 1,
      TwoSided = 2,
      ShadowsOnly = 3,
    }
    export enum LightShadowResolution {
      FromQualitySettings = -1,
      Low = 0,
      Medium = 1,
      High = 2,
      VeryHigh = 3,
    }
    export enum GraphicsDeviceType {
      OpenGL2 = 0,
      Direct3D9 = 1,
      Direct3D11 = 2,
      PlayStation3 = 3,
      Null = 4,
      Xbox360 = 6,
      OpenGLES2 = 8,
      OpenGLES3 = 11,
      PlayStationVita = 12,
      PlayStation4 = 13,
      XboxOne = 14,
      PlayStationMobile = 15,
      Metal = 16,
      OpenGLCore = 17,
      Direct3D12 = 18,
      N3DS = 19,
      Vulkan = 21,
      Switch = 22,
      XboxOneD3D12 = 23,
    }
    export enum GraphicsTier {
      Tier1 = 0,
      Tier2 = 1,
      Tier3 = 2,
    }
    export interface SubMeshDescriptor {
      bounds: UnityEngine.Bounds;
      topology: UnityEngine.MeshTopology;
      indexStart: number;
      indexCount: number;
      baseVertex: number;
      firstVertex: number;
      vertexCount: number;
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface VertexAttributeDescriptor {
      attribute: UnityEngine.Rendering.VertexAttribute;
      format: UnityEngine.Rendering.VertexAttributeFormat;
      dimension: number;
      stream: number;
      ToString: (() => string);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean) | ((other: UnityEngine.Rendering.VertexAttributeDescriptor) => boolean);
      GetType: (() => any);
    }
    export enum FormatSwizzle {
      FormatSwizzleR = 0,
      FormatSwizzleG = 1,
      FormatSwizzleB = 2,
      FormatSwizzleA = 3,
      FormatSwizzle0 = 4,
      FormatSwizzle1 = 5,
    }
    export interface RenderTargetIdentifier {
      ToString: (() => string);
      GetHashCode: (() => number);
      Equals: ((rhs: UnityEngine.Rendering.RenderTargetIdentifier) => boolean) | ((obj: any) => boolean);
      GetType: (() => any);
    }
    export enum RenderTargetFlags {
      None = 0,
      ReadOnlyDepth = 1,
      ReadOnlyStencil = 2,
      ReadOnlyDepthStencil = 3,
    }
    export interface RenderTargetBinding {
      colorRenderTargets: UnityEngine.Rendering.RenderTargetIdentifier[];
      depthRenderTarget: UnityEngine.Rendering.RenderTargetIdentifier;
      colorLoadActions: UnityEngine.Rendering.RenderBufferLoadAction[];
      colorStoreActions: UnityEngine.Rendering.RenderBufferStoreAction[];
      depthLoadAction: UnityEngine.Rendering.RenderBufferLoadAction;
      depthStoreAction: UnityEngine.Rendering.RenderBufferStoreAction;
      flags: UnityEngine.Rendering.RenderTargetFlags;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ReflectionProbeUsage {
      Off = 0,
      BlendProbes = 1,
      BlendProbesAndSkybox = 2,
      Simple = 3,
    }
    export enum ReflectionProbeType {
      Cube = 0,
      Card = 1,
    }
    export enum ReflectionProbeClearFlags {
      Skybox = 1,
      SolidColor = 2,
    }
    export enum ReflectionProbeMode {
      Baked = 0,
      Realtime = 1,
      Custom = 2,
    }
    export interface ReflectionProbeBlendInfo {
      probe: UnityEngine.ReflectionProbe;
      weight: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ReflectionProbeRefreshMode {
      OnAwake = 0,
      EveryFrame = 1,
      ViaScripting = 2,
    }
    export enum ReflectionProbeTimeSlicingMode {
      AllFacesAtOnce = 0,
      IndividualFaces = 1,
      NoTimeSlicing = 2,
    }
    export enum ShadowSamplingMode {
      CompareDepths = 0,
      RawDepth = 1,
      None = 2,
    }
    export enum LightProbeUsage {
      Off = 0,
      BlendProbes = 1,
      UseProxyVolume = 2,
      CustomProvided = 4,
    }
    export enum BuiltinShaderType {
      DeferredShading = 0,
      DeferredReflections = 1,
      LegacyDeferredLighting = 2,
      ScreenSpaceShadows = 3,
      DepthNormals = 4,
      MotionVectors = 5,
      LightHalo = 6,
      LensFlare = 7,
    }
    export enum BuiltinShaderMode {
      Disabled = 0,
      UseBuiltin = 1,
      UseCustom = 2,
    }
    export enum BuiltinShaderDefine {
      UNITY_NO_DXT5nm = 0,
      UNITY_NO_RGBM = 1,
      UNITY_USE_NATIVE_HDR = 2,
      UNITY_ENABLE_REFLECTION_BUFFERS = 3,
      UNITY_FRAMEBUFFER_FETCH_AVAILABLE = 4,
      UNITY_ENABLE_NATIVE_SHADOW_LOOKUPS = 5,
      UNITY_METAL_SHADOWS_USE_POINT_FILTERING = 6,
      UNITY_NO_CUBEMAP_ARRAY = 7,
      UNITY_NO_SCREENSPACE_SHADOWS = 8,
      UNITY_USE_DITHER_MASK_FOR_ALPHABLENDED_SHADOWS = 9,
      UNITY_PBS_USE_BRDF1 = 10,
      UNITY_PBS_USE_BRDF2 = 11,
      UNITY_PBS_USE_BRDF3 = 12,
      UNITY_NO_FULL_STANDARD_SHADER = 13,
      UNITY_SPECCUBE_BOX_PROJECTION = 14,
      UNITY_SPECCUBE_BLENDING = 15,
      UNITY_ENABLE_DETAIL_NORMALMAP = 16,
      SHADER_API_MOBILE = 17,
      SHADER_API_DESKTOP = 18,
      UNITY_HARDWARE_TIER1 = 19,
      UNITY_HARDWARE_TIER2 = 20,
      UNITY_HARDWARE_TIER3 = 21,
      UNITY_COLORSPACE_GAMMA = 22,
      UNITY_LIGHT_PROBE_PROXY_VOLUME = 23,
      UNITY_HALF_PRECISION_FRAGMENT_SHADER_REGISTERS = 24,
      UNITY_LIGHTMAP_DLDR_ENCODING = 25,
      UNITY_LIGHTMAP_RGBM_ENCODING = 26,
      UNITY_LIGHTMAP_FULL_HDR = 27,
      UNITY_VIRTUAL_TEXTURING = 28,
      UNITY_PRETRANSFORM_TO_DISPLAY_ORIENTATION = 29,
      UNITY_ASTC_NORMALMAP_ENCODING = 30,
      SHADER_API_GLES30 = 31,
      UNITY_UNIFIED_SHADER_PRECISION_MODEL = 32,
    }
    export enum VideoShadersIncludeMode {
      Never = 0,
      Referenced = 1,
      Always = 2,
    }
    export enum TextureDimension {
      Unknown = -1,
      None = 0,
      Any = 1,
      Tex2D = 2,
      Tex3D = 3,
      Cube = 4,
      Tex2DArray = 5,
      CubeArray = 6,
    }
    export enum CopyTextureSupport {
      None = 0,
      Basic = 1,
      Copy3D = 2,
      DifferentTypes = 4,
      TextureToRT = 8,
      RTToTexture = 16,
    }
    export enum CameraHDRMode {
      FP16 = 1,
      R11G11B10 = 2,
    }
    export enum RealtimeGICPUUsage {
      Low = 25,
      Medium = 50,
      High = 75,
      Unlimited = 100,
    }
    export enum ComputeQueueType {
      Default = 0,
      Background = 1,
      Urgent = 2,
    }
    export enum SinglePassStereoMode {
      None = 0,
      SideBySide = 1,
      Instancing = 2,
      Multiview = 3,
    }
    export enum CommandBufferExecutionFlags {
      None = 0,
      AsyncCompute = 2,
    }
    export enum RenderTextureSubElement {
      Color = 0,
      Depth = 1,
      Stencil = 2,
      Default = 3,
    }
    export enum RenderingThreadingMode {
      Direct = 0,
      SingleThreaded = 1,
      MultiThreaded = 2,
      LegacyJobified = 3,
      NativeGraphicsJobs = 4,
      NativeGraphicsJobsWithoutRenderThread = 5,
    }
    export enum OpenGLESVersion {
      None = 0,
      OpenGLES20 = 1,
      OpenGLES30 = 2,
      OpenGLES31 = 3,
      OpenGLES31AEP = 4,
      OpenGLES32 = 5,
    }
    export enum SynchronisationStageFlags {
      VertexProcessing = 1,
      PixelProcessing = 2,
      ComputeProcessing = 4,
      AllGPUOperations = 7,
    }
    export enum GraphicsFenceType {
      AsyncQueueSynchronisation = 0,
      CPUSynchronisation = 1,
    }
    export interface GraphicsFence {
      passed: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface GraphicsSettings {
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface OnDemandRendering {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface CommandBuffer {
      name: string;
      sizeInBytes: number;
      ConvertTexture: ((src: UnityEngine.Rendering.RenderTargetIdentifier, dst: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((src: UnityEngine.Rendering.RenderTargetIdentifier, srcElement: number, dst: UnityEngine.Rendering.RenderTargetIdentifier, dstElement: number) => void);
      WaitAllAsyncReadbackRequests: (() => void);
      RequestAsyncReadback: ((src: UnityEngine.ComputeBuffer, callback: any) => void) | ((src: UnityEngine.GraphicsBuffer, callback: any) => void) | ((src: UnityEngine.ComputeBuffer, size: number, offset: number, callback: any) => void) | ((src: UnityEngine.GraphicsBuffer, size: number, offset: number, callback: any) => void) | ((src: UnityEngine.Texture, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, dstFormat: UnityEngine.TextureFormat, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, dstFormat: UnityEngine.Experimental.Rendering.GraphicsFormat, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: UnityEngine.TextureFormat, callback: any) => void) | ((src: UnityEngine.Texture, mipIndex: number, x: number, width: number, y: number, height: number, z: number, depth: number, dstFormat: UnityEngine.Experimental.Rendering.GraphicsFormat, callback: any) => void);
      SetInvertCulling: ((invertCulling: boolean) => void);
      SetComputeFloatParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, val: number) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, val: number) => void);
      SetComputeIntParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, val: number) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, val: number) => void);
      SetComputeVectorParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, val: UnityEngine.Vector4) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, val: UnityEngine.Vector4) => void);
      SetComputeVectorArrayParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, values: UnityEngine.Vector4[]) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, values: UnityEngine.Vector4[]) => void);
      SetComputeMatrixParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, val: UnityEngine.Matrix4x4) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, val: UnityEngine.Matrix4x4) => void);
      SetComputeMatrixArrayParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, values: UnityEngine.Matrix4x4[]) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, values: UnityEngine.Matrix4x4[]) => void);
      SetRayTracingShaderPass: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, passName: string) => void);
      Clear: (() => void);
      ClearRandomWriteTargets: (() => void);
      SetViewport: ((pixelRect: UnityEngine.Rect) => void);
      EnableScissorRect: ((scissor: UnityEngine.Rect) => void);
      DisableScissorRect: (() => void);
      GetTemporaryRT: ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: UnityEngine.RenderTextureMemoryless, useDynamicScale: boolean) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: UnityEngine.RenderTextureMemoryless) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: UnityEngine.RenderTextureMemoryless, useDynamicScale: boolean) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean, memorylessMode: UnityEngine.RenderTextureMemoryless) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat) => void) | ((nameID: number, width: number, height: number, depthBuffer: number, filter: UnityEngine.FilterMode) => void) | ((nameID: number, width: number, height: number, depthBuffer: number) => void) | ((nameID: number, width: number, height: number) => void) | ((nameID: number, desc: UnityEngine.RenderTextureDescriptor, filter: UnityEngine.FilterMode) => void) | ((nameID: number, desc: UnityEngine.RenderTextureDescriptor) => void);
      GetTemporaryRTArray: ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean, useDynamicScale: boolean) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number, enableRandomWrite: boolean) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat, antiAliasing: number) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.Experimental.Rendering.GraphicsFormat) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number, enableRandomWrite: boolean) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode, format: UnityEngine.RenderTextureFormat) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number, filter: UnityEngine.FilterMode) => void) | ((nameID: number, width: number, height: number, slices: number, depthBuffer: number) => void) | ((nameID: number, width: number, height: number, slices: number) => void);
      ReleaseTemporaryRT: ((nameID: number) => void);
      ClearRenderTarget: ((clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color, depth: number) => void) | ((clearDepth: boolean, clearColor: boolean, backgroundColor: UnityEngine.Color) => void);
      SetGlobalFloat: ((nameID: number, value: number) => void) | ((name: string, value: number) => void);
      SetGlobalInt: ((nameID: number, value: number) => void) | ((name: string, value: number) => void);
      SetGlobalVector: ((nameID: number, value: UnityEngine.Vector4) => void) | ((name: string, value: UnityEngine.Vector4) => void);
      SetGlobalColor: ((nameID: number, value: UnityEngine.Color) => void) | ((name: string, value: UnityEngine.Color) => void);
      SetGlobalMatrix: ((nameID: number, value: UnityEngine.Matrix4x4) => void) | ((name: string, value: UnityEngine.Matrix4x4) => void);
      EnableShaderKeyword: ((keyword: string) => void);
      DisableShaderKeyword: ((keyword: string) => void);
      SetViewMatrix: ((view: UnityEngine.Matrix4x4) => void);
      SetProjectionMatrix: ((proj: UnityEngine.Matrix4x4) => void);
      SetViewProjectionMatrices: ((view: UnityEngine.Matrix4x4, proj: UnityEngine.Matrix4x4) => void);
      SetGlobalDepthBias: ((bias: number, slopeBias: number) => void);
      SetExecutionFlags: ((flags: UnityEngine.Rendering.CommandBufferExecutionFlags) => void);
      SetGlobalFloatArray: ((nameID: number, values: any) => void) | ((propertyName: string, values: any) => void) | ((nameID: number, values: any) => void) | ((propertyName: string, values: any) => void);
      SetGlobalVectorArray: ((nameID: number, values: UnityEngine.Vector4[]) => void) | ((propertyName: string, values: any) => void) | ((nameID: number, values: any) => void) | ((propertyName: string, values: UnityEngine.Vector4[]) => void);
      SetGlobalMatrixArray: ((nameID: number, values: UnityEngine.Matrix4x4[]) => void) | ((propertyName: string, values: any) => void) | ((nameID: number, values: any) => void) | ((propertyName: string, values: UnityEngine.Matrix4x4[]) => void);
      BeginSample: ((name: string) => void) | ((sampler: UnityEngine.Profiling.CustomSampler) => void);
      EndSample: ((name: string) => void) | ((sampler: UnityEngine.Profiling.CustomSampler) => void);
      IncrementUpdateCount: ((dest: UnityEngine.Rendering.RenderTargetIdentifier) => void);
      SetInstanceMultiplier: ((multiplier: any) => void);
      SetRenderTarget: ((rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((rt: UnityEngine.Rendering.RenderTargetIdentifier, loadAction: UnityEngine.Rendering.RenderBufferLoadAction, storeAction: UnityEngine.Rendering.RenderBufferStoreAction) => void) | ((rt: UnityEngine.Rendering.RenderTargetIdentifier, colorLoadAction: UnityEngine.Rendering.RenderBufferLoadAction, colorStoreAction: UnityEngine.Rendering.RenderBufferStoreAction, depthLoadAction: UnityEngine.Rendering.RenderBufferLoadAction, depthStoreAction: UnityEngine.Rendering.RenderBufferStoreAction) => void) | ((rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number) => void) | ((rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace) => void) | ((rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number) => void) | ((color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number) => void) | ((color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace) => void) | ((color: UnityEngine.Rendering.RenderTargetIdentifier, depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number) => void) | ((color: UnityEngine.Rendering.RenderTargetIdentifier, colorLoadAction: UnityEngine.Rendering.RenderBufferLoadAction, colorStoreAction: UnityEngine.Rendering.RenderBufferStoreAction, depth: UnityEngine.Rendering.RenderTargetIdentifier, depthLoadAction: UnityEngine.Rendering.RenderBufferLoadAction, depthStoreAction: UnityEngine.Rendering.RenderBufferStoreAction) => void) | ((colors: UnityEngine.Rendering.RenderTargetIdentifier[], depth: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((colors: UnityEngine.Rendering.RenderTargetIdentifier[], depth: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number) => void) | ((binding: UnityEngine.Rendering.RenderTargetBinding, mipLevel: number, cubemapFace: UnityEngine.CubemapFace, depthSlice: number) => void) | ((binding: UnityEngine.Rendering.RenderTargetBinding) => void);
      SetComputeBufferData: ((buffer: UnityEngine.ComputeBuffer, data: any) => void) | ((buffer: UnityEngine.ComputeBuffer, data: any, managedBufferStartIndex: number, graphicsBufferStartIndex: number, count: number) => void);
      SetComputeBufferCounterValue: ((buffer: UnityEngine.ComputeBuffer, counterValue: any) => void);
      Dispose: (() => void);
      Release: (() => void);
      CreateAsyncGraphicsFence: (() => UnityEngine.Rendering.GraphicsFence) | ((stage: UnityEngine.Rendering.SynchronisationStage) => UnityEngine.Rendering.GraphicsFence);
      CreateGraphicsFence: ((fenceType: UnityEngine.Rendering.GraphicsFenceType, stage: UnityEngine.Rendering.SynchronisationStageFlags) => UnityEngine.Rendering.GraphicsFence);
      WaitOnAsyncGraphicsFence: ((fence: UnityEngine.Rendering.GraphicsFence) => void) | ((fence: UnityEngine.Rendering.GraphicsFence, stage: UnityEngine.Rendering.SynchronisationStage) => void) | ((fence: UnityEngine.Rendering.GraphicsFence, stage: UnityEngine.Rendering.SynchronisationStageFlags) => void);
      SetComputeFloatParams: ((computeShader: UnityEngine.ComputeShader, name: string, values: any) => void) | ((computeShader: UnityEngine.ComputeShader, nameID: number, values: any) => void);
      SetComputeIntParams: ((computeShader: UnityEngine.ComputeShader, name: string, values: any) => void) | ((computeShader: UnityEngine.ComputeShader, nameID: number, values: any) => void);
      SetComputeTextureParam: ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, name: string, rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, nameID: number, rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, name: string, rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, nameID: number, rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, name: string, rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, element: UnityEngine.Rendering.RenderTextureSubElement) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, nameID: number, rt: UnityEngine.Rendering.RenderTargetIdentifier, mipLevel: number, element: UnityEngine.Rendering.RenderTextureSubElement) => void);
      SetComputeBufferParam: ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, nameID: number, buffer: UnityEngine.ComputeBuffer) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, name: string, buffer: UnityEngine.ComputeBuffer) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, nameID: number, buffer: UnityEngine.GraphicsBuffer) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, name: string, buffer: UnityEngine.GraphicsBuffer) => void);
      SetComputeConstantBufferParam: ((computeShader: UnityEngine.ComputeShader, nameID: number, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((computeShader: UnityEngine.ComputeShader, nameID: number, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((computeShader: UnityEngine.ComputeShader, name: string, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
      DispatchCompute: ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, indirectBuffer: UnityEngine.ComputeBuffer, argsOffset: any) => void) | ((computeShader: UnityEngine.ComputeShader, kernelIndex: number, indirectBuffer: UnityEngine.GraphicsBuffer, argsOffset: any) => void);
      BuildRayTracingAccelerationStructure: ((accelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure) => void) | ((accelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure, relativeOrigin: UnityEngine.Vector3) => void);
      SetRayTracingAccelerationStructure: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, rayTracingAccelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, rayTracingAccelerationStructure: UnityEngine.Experimental.Rendering.RayTracingAccelerationStructure) => void);
      SetRayTracingBufferParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, buffer: UnityEngine.ComputeBuffer) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, buffer: UnityEngine.ComputeBuffer) => void);
      SetRayTracingConstantBufferParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, buffer: UnityEngine.ComputeBuffer, offset: number, size: number) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, buffer: UnityEngine.GraphicsBuffer, offset: number, size: number) => void);
      SetRayTracingTextureParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, rt: UnityEngine.Rendering.RenderTargetIdentifier) => void);
      SetRayTracingFloatParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, val: number) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, val: number) => void);
      SetRayTracingFloatParams: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, values: any) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, values: any) => void);
      SetRayTracingIntParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, val: number) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, val: number) => void);
      SetRayTracingIntParams: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, values: any) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, values: any) => void);
      SetRayTracingVectorParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, val: UnityEngine.Vector4) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, val: UnityEngine.Vector4) => void);
      SetRayTracingVectorArrayParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, values: UnityEngine.Vector4[]) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, values: UnityEngine.Vector4[]) => void);
      SetRayTracingMatrixParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, val: UnityEngine.Matrix4x4) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, val: UnityEngine.Matrix4x4) => void);
      SetRayTracingMatrixArrayParam: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, name: string, values: UnityEngine.Matrix4x4[]) => void) | ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, nameID: number, values: UnityEngine.Matrix4x4[]) => void);
      DispatchRays: ((rayTracingShader: UnityEngine.Experimental.Rendering.RayTracingShader, rayGenName: string, width: any, height: any, depth: any, camera?: UnityEngine.Camera) => void);
      GenerateMips: ((rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((rt: UnityEngine.RenderTexture) => void);
      ResolveAntiAliasedSurface: ((rt: UnityEngine.RenderTexture, target?: UnityEngine.RenderTexture) => void);
      DrawMesh: ((mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number, shaderPass: number) => void) | ((mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, submeshIndex: number) => void) | ((mesh: UnityEngine.Mesh, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material) => void);
      DrawRenderer: ((renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number, shaderPass: number) => void) | ((renderer: UnityEngine.Renderer, material: UnityEngine.Material, submeshIndex: number) => void) | ((renderer: UnityEngine.Renderer, material: UnityEngine.Material) => void);
      DrawProcedural: ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number, instanceCount: number) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, vertexCount: number) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, indexCount: number, instanceCount: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, indexCount: number, instanceCount: number) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, indexCount: number) => void);
      DrawProceduralIndirect: ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.ComputeBuffer) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number) => void) | ((matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number) => void) | ((indexBuffer: UnityEngine.GraphicsBuffer, matrix: UnityEngine.Matrix4x4, material: UnityEngine.Material, shaderPass: number, topology: UnityEngine.MeshTopology, bufferWithArgs: UnityEngine.GraphicsBuffer) => void);
      DrawMeshInstanced: ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[], count: number) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, matrices: UnityEngine.Matrix4x4[]) => void);
      DrawMeshInstancedProcedural: ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, count: number, properties?: UnityEngine.MaterialPropertyBlock) => void);
      DrawMeshInstancedIndirect: ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.ComputeBuffer, argsOffset: number) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.ComputeBuffer) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number, properties: UnityEngine.MaterialPropertyBlock) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.GraphicsBuffer, argsOffset: number) => void) | ((mesh: UnityEngine.Mesh, submeshIndex: number, material: UnityEngine.Material, shaderPass: number, bufferWithArgs: UnityEngine.GraphicsBuffer) => void);
      DrawOcclusionMesh: ((normalizedCamViewport: UnityEngine.RectInt) => void);
      SetRandomWriteTarget: ((index: number, rt: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((index: number, buffer: UnityEngine.ComputeBuffer, preserveCounterValue: boolean) => void) | ((index: number, buffer: UnityEngine.ComputeBuffer) => void) | ((index: number, buffer: UnityEngine.GraphicsBuffer, preserveCounterValue: boolean) => void) | ((index: number, buffer: UnityEngine.GraphicsBuffer) => void);
      CopyCounterValue: ((src: UnityEngine.ComputeBuffer, dst: UnityEngine.ComputeBuffer, dstOffsetBytes: any) => void) | ((src: UnityEngine.GraphicsBuffer, dst: UnityEngine.ComputeBuffer, dstOffsetBytes: any) => void) | ((src: UnityEngine.ComputeBuffer, dst: UnityEngine.GraphicsBuffer, dstOffsetBytes: any) => void) | ((src: UnityEngine.GraphicsBuffer, dst: UnityEngine.GraphicsBuffer, dstOffsetBytes: any) => void);
      CopyTexture: ((src: UnityEngine.Rendering.RenderTargetIdentifier, dst: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((src: UnityEngine.Rendering.RenderTargetIdentifier, srcElement: number, dst: UnityEngine.Rendering.RenderTargetIdentifier, dstElement: number) => void) | ((src: UnityEngine.Rendering.RenderTargetIdentifier, srcElement: number, srcMip: number, dst: UnityEngine.Rendering.RenderTargetIdentifier, dstElement: number, dstMip: number) => void) | ((src: UnityEngine.Rendering.RenderTargetIdentifier, srcElement: number, srcMip: number, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dst: UnityEngine.Rendering.RenderTargetIdentifier, dstElement: number, dstMip: number, dstX: number, dstY: number) => void);
      Blit: ((source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, scale: UnityEngine.Vector2, offset: UnityEngine.Vector2) => void) | ((source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material) => void) | ((source: UnityEngine.Texture, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, scale: UnityEngine.Vector2, offset: UnityEngine.Vector2) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, sourceDepthSlice: number, destDepthSlice: number) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, scale: UnityEngine.Vector2, offset: UnityEngine.Vector2, sourceDepthSlice: number, destDepthSlice: number) => void) | ((source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, mat: UnityEngine.Material, pass: number, destDepthSlice: number) => void);
      SetGlobalTexture: ((name: string, value: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((nameID: number, value: UnityEngine.Rendering.RenderTargetIdentifier) => void) | ((name: string, value: UnityEngine.Rendering.RenderTargetIdentifier, element: UnityEngine.Rendering.RenderTextureSubElement) => void) | ((nameID: number, value: UnityEngine.Rendering.RenderTargetIdentifier, element: UnityEngine.Rendering.RenderTextureSubElement) => void);
      SetGlobalBuffer: ((name: string, value: UnityEngine.ComputeBuffer) => void) | ((nameID: number, value: UnityEngine.ComputeBuffer) => void) | ((name: string, value: UnityEngine.GraphicsBuffer) => void) | ((nameID: number, value: UnityEngine.GraphicsBuffer) => void);
      SetGlobalConstantBuffer: ((buffer: UnityEngine.ComputeBuffer, nameID: number, offset: number, size: number) => void) | ((buffer: UnityEngine.ComputeBuffer, name: string, offset: number, size: number) => void) | ((buffer: UnityEngine.GraphicsBuffer, nameID: number, offset: number, size: number) => void) | ((buffer: UnityEngine.GraphicsBuffer, name: string, offset: number, size: number) => void);
      SetShadowSamplingMode: ((shadowmap: UnityEngine.Rendering.RenderTargetIdentifier, mode: UnityEngine.Rendering.ShadowSamplingMode) => void);
      SetSinglePassStereo: ((mode: UnityEngine.Rendering.SinglePassStereoMode) => void);
      IssuePluginEvent: ((callback: any, eventID: number) => void);
      IssuePluginEventAndData: ((callback: any, eventID: number, data: any) => void);
      IssuePluginCustomBlit: ((callback: any, command: any, source: UnityEngine.Rendering.RenderTargetIdentifier, dest: UnityEngine.Rendering.RenderTargetIdentifier, commandParam: any, commandFlags: any) => void);
      IssuePluginCustomTextureUpdate: ((callback: any, targetTexture: UnityEngine.Texture, userData: any) => void);
      IssuePluginCustomTextureUpdateV1: ((callback: any, targetTexture: UnityEngine.Texture, userData: any) => void);
      IssuePluginCustomTextureUpdateV2: ((callback: any, targetTexture: UnityEngine.Texture, userData: any) => void);
      ProcessVTFeedback: ((rt: UnityEngine.Rendering.RenderTargetIdentifier, resolver: any, slice: number, x: number, width: number, y: number, height: number, mip: number) => void);
      CreateGPUFence: ((stage: UnityEngine.Rendering.SynchronisationStage) => UnityEngine.Rendering.GPUFence) | (() => UnityEngine.Rendering.GPUFence);
      WaitOnGPUFence: ((fence: UnityEngine.Rendering.GPUFence, stage: UnityEngine.Rendering.SynchronisationStage) => void) | ((fence: UnityEngine.Rendering.GPUFence) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface CommandBufferExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SplashScreen {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum SplashScreen_StopBehavior {
      StopImmediate = 0,
      FadeOut = 1,
    }
    export interface SphericalHarmonicsL2 {
      Clear: (() => void);
      AddAmbientLight: ((color: UnityEngine.Color) => void);
      AddDirectionalLight: ((direction: UnityEngine.Vector3, color: UnityEngine.Color, intensity: number) => void);
      Evaluate: ((directions: UnityEngine.Vector3[], results: UnityEngine.Color[]) => void);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean) | ((other: UnityEngine.Rendering.SphericalHarmonicsL2) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface BatchVisibility {
      offset: number;
      instancesCount: number;
      visibleCount: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface BatchCullingContext {
      cullingPlanes: any; // Unity.Collections.NativeArray`1[UnityEngine.Plane]
      batchVisibility: any; // Unity.Collections.NativeArray`1[UnityEngine.Rendering.BatchVisibility]
      visibleIndices: any; // Unity.Collections.NativeArray`1[System.Int32]
      visibleIndicesY: any; // Unity.Collections.NativeArray`1[System.Int32]
      lodParameters: UnityEngine.Rendering.LODParameters;
      cullingMatrix: UnityEngine.Matrix4x4;
      nearPlane: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface BatchRendererGroup {
      Dispose: (() => void);
      AddBatch: ((mesh: UnityEngine.Mesh, subMeshIndex: number, material: UnityEngine.Material, layer: number, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, invertCulling: boolean, bounds: UnityEngine.Bounds, instanceCount: number, customProps: UnityEngine.MaterialPropertyBlock, associatedSceneObject: UnityEngine.GameObject) => number) | ((mesh: UnityEngine.Mesh, subMeshIndex: number, material: UnityEngine.Material, layer: number, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, invertCulling: boolean, bounds: UnityEngine.Bounds, instanceCount: number, customProps: UnityEngine.MaterialPropertyBlock, associatedSceneObject: UnityEngine.GameObject, sceneCullingMask: any) => number) | ((mesh: UnityEngine.Mesh, subMeshIndex: number, material: UnityEngine.Material, layer: number, castShadows: UnityEngine.Rendering.ShadowCastingMode, receiveShadows: boolean, invertCulling: boolean, bounds: UnityEngine.Bounds, instanceCount: number, customProps: UnityEngine.MaterialPropertyBlock, associatedSceneObject: UnityEngine.GameObject, sceneCullingMask: any, renderingLayerMask: any) => number);
      SetBatchFlags: ((batchIndex: number, flags: any) => void);
      SetBatchPropertyMetadata: ((batchIndex: number, cbufferLengths: any, cbufferMetadata: any) => void);
      SetInstancingData: ((batchIndex: number, instanceCount: number, customProps: UnityEngine.MaterialPropertyBlock) => void);
      GetBatchMatrices: ((batchIndex: number) => any);
      GetBatchScalarArrayInt: ((batchIndex: number, propertyName: string) => any) | ((batchIndex: number, propertyName: number) => any);
      GetBatchScalarArray: ((batchIndex: number, propertyName: string) => any) | ((batchIndex: number, propertyName: number) => any);
      GetBatchVectorArrayInt: ((batchIndex: number, propertyName: string) => any) | ((batchIndex: number, propertyName: number) => any);
      GetBatchVectorArray: ((batchIndex: number, propertyName: string) => any) | ((batchIndex: number, propertyName: number) => any);
      GetBatchMatrixArray: ((batchIndex: number, propertyName: string) => any) | ((batchIndex: number, propertyName: number) => any);
      SetBatchBounds: ((batchIndex: number, bounds: UnityEngine.Bounds) => void);
      GetNumBatches: (() => number);
      RemoveBatch: ((index: number) => void);
      EnableVisibleIndicesYArray: ((enabled: boolean) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface BatchRendererGroup_OnPerformCulling {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((rendererGroup: UnityEngine.Rendering.BatchRendererGroup, cullingContext: UnityEngine.Rendering.BatchCullingContext) => Unity.Jobs.JobHandle);
      BeginInvoke: ((rendererGroup: UnityEngine.Rendering.BatchRendererGroup, cullingContext: UnityEngine.Rendering.BatchCullingContext, callback: any, object: any) => any);
      EndInvoke: ((result: any) => Unity.Jobs.JobHandle);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface AttachmentDescriptor {
      loadAction: UnityEngine.Rendering.RenderBufferLoadAction;
      storeAction: UnityEngine.Rendering.RenderBufferStoreAction;
      graphicsFormat: UnityEngine.Experimental.Rendering.GraphicsFormat;
      format: UnityEngine.RenderTextureFormat;
      loadStoreTarget: UnityEngine.Rendering.RenderTargetIdentifier;
      resolveTarget: UnityEngine.Rendering.RenderTargetIdentifier;
      clearColor: UnityEngine.Color;
      clearDepth: number;
      clearStencil: any; // System.UInt32
      ConfigureTarget: ((target: UnityEngine.Rendering.RenderTargetIdentifier, loadExistingContents: boolean, storeResults: boolean) => void);
      ConfigureResolveTarget: ((target: UnityEngine.Rendering.RenderTargetIdentifier) => void);
      ConfigureClear: ((clearColor: UnityEngine.Color, clearDepth?: number, clearStencil?: any) => void);
      Equals: ((other: UnityEngine.Rendering.AttachmentDescriptor) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface BlendState {
      separateMRTBlendStates: boolean;
      alphaToMask: boolean;
      blendState0: UnityEngine.Rendering.RenderTargetBlendState;
      blendState1: UnityEngine.Rendering.RenderTargetBlendState;
      blendState2: UnityEngine.Rendering.RenderTargetBlendState;
      blendState3: UnityEngine.Rendering.RenderTargetBlendState;
      blendState4: UnityEngine.Rendering.RenderTargetBlendState;
      blendState5: UnityEngine.Rendering.RenderTargetBlendState;
      blendState6: UnityEngine.Rendering.RenderTargetBlendState;
      blendState7: UnityEngine.Rendering.RenderTargetBlendState;
      Equals: ((other: UnityEngine.Rendering.BlendState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface CameraProperties {
      GetShadowCullingPlane: ((index: number) => UnityEngine.Plane);
      SetShadowCullingPlane: ((index: number, plane: UnityEngine.Plane) => void);
      GetCameraCullingPlane: ((index: number) => UnityEngine.Plane);
      SetCameraCullingPlane: ((index: number, plane: UnityEngine.Plane) => void);
      Equals: ((other: UnityEngine.Rendering.CameraProperties) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum CullingOptions {
      None = 0,
      ForceEvenIfCameraIsNotActive = 1,
      OcclusionCull = 2,
      NeedsLighting = 4,
      NeedsReflectionProbes = 8,
      Stereo = 16,
      DisablePerObjectCulling = 32,
      ShadowCasters = 64,
    }
    export interface ScriptableCullingParameters {
      maximumVisibleLights: number;
      cullingPlaneCount: number;
      isOrthographic: boolean;
      lodParameters: UnityEngine.Rendering.LODParameters;
      cullingMask: any; // System.UInt32
      cullingMatrix: UnityEngine.Matrix4x4;
      origin: UnityEngine.Vector3;
      shadowDistance: number;
      cullingOptions: UnityEngine.Rendering.CullingOptions;
      reflectionProbeSortingCriteria: UnityEngine.Rendering.ReflectionProbeSortingCriteria;
      cameraProperties: UnityEngine.Rendering.CameraProperties;
      stereoViewMatrix: UnityEngine.Matrix4x4;
      stereoProjectionMatrix: UnityEngine.Matrix4x4;
      stereoSeparationDistance: number;
      accurateOcclusionThreshold: number;
      maximumPortalCullingJobs: number;
      GetLayerCullingDistance: ((layerIndex: number) => number);
      SetLayerCullingDistance: ((layerIndex: number, distance: number) => void);
      GetCullingPlane: ((index: number) => UnityEngine.Plane);
      SetCullingPlane: ((index: number, plane: UnityEngine.Plane) => void);
      Equals: ((other: UnityEngine.Rendering.ScriptableCullingParameters) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface CullingResults {
      visibleLights: any; // Unity.Collections.NativeArray`1[UnityEngine.Rendering.VisibleLight]
      visibleOffscreenVertexLights: any; // Unity.Collections.NativeArray`1[UnityEngine.Rendering.VisibleLight]
      visibleReflectionProbes: any; // Unity.Collections.NativeArray`1[UnityEngine.Rendering.VisibleReflectionProbe]
      lightIndexCount: number;
      reflectionProbeIndexCount: number;
      lightAndReflectionProbeIndexCount: number;
      FillLightAndReflectionProbeIndices: ((computeBuffer: UnityEngine.ComputeBuffer) => void) | ((buffer: UnityEngine.GraphicsBuffer) => void);
      GetLightIndexMap: ((allocator: Unity.Collections.Allocator) => any);
      SetLightIndexMap: ((lightIndexMap: any) => void);
      GetReflectionProbeIndexMap: ((allocator: Unity.Collections.Allocator) => any);
      SetReflectionProbeIndexMap: ((lightIndexMap: any) => void);
      Equals: ((other: UnityEngine.Rendering.CullingResults) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface DepthState {
      writeEnabled: boolean;
      compareFunction: UnityEngine.Rendering.CompareFunction;
      Equals: ((other: UnityEngine.Rendering.DepthState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface DrawingSettings {
      sortingSettings: UnityEngine.Rendering.SortingSettings;
      perObjectData: UnityEngine.Rendering.PerObjectData;
      enableDynamicBatching: boolean;
      enableInstancing: boolean;
      overrideMaterial: UnityEngine.Material;
      overrideMaterialPassIndex: number;
      mainLightIndex: number;
      GetShaderPassName: ((index: number) => UnityEngine.Rendering.ShaderTagId);
      SetShaderPassName: ((index: number, shaderPassName: UnityEngine.Rendering.ShaderTagId) => void);
      Equals: ((other: UnityEngine.Rendering.DrawingSettings) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FilteringSettings {
      renderQueueRange: UnityEngine.Rendering.RenderQueueRange;
      layerMask: number;
      renderingLayerMask: any; // System.UInt32
      excludeMotionVectorObjects: boolean;
      sortingLayerRange: UnityEngine.Rendering.SortingLayerRange;
      Equals: ((other: UnityEngine.Rendering.FilteringSettings) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum GizmoSubset {
      PreImageEffects = 0,
      PostImageEffects = 1,
    }
    export interface LODParameters {
      isOrthographic: boolean;
      cameraPosition: UnityEngine.Vector3;
      fieldOfView: number;
      orthoSize: number;
      cameraPixelHeight: number;
      Equals: ((other: UnityEngine.Rendering.LODParameters) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum PerObjectData {
      None = 0,
      LightProbe = 1,
      ReflectionProbes = 2,
      LightProbeProxyVolume = 4,
      Lightmaps = 8,
      LightData = 16,
      MotionVectors = 32,
      LightIndices = 64,
      ReflectionProbeData = 128,
      OcclusionProbe = 256,
      OcclusionProbeProxyVolume = 512,
      ShadowMask = 1024,
    }
    export interface RasterState {
      cullingMode: UnityEngine.Rendering.CullMode;
      depthClip: boolean;
      conservative: boolean;
      offsetUnits: number;
      offsetFactor: number;
      Equals: ((other: UnityEngine.Rendering.RasterState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ReflectionProbeSortingCriteria {
      None = 0,
      Importance = 1,
      Size = 2,
      ImportanceThenSize = 3,
    }
    export interface RenderPipeline {
      disposed: boolean;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface RenderPipelineAsset {
      terrainBrushPassIndex: number;
      renderingLayerMaskNames: any; // System.String[]
      defaultMaterial: UnityEngine.Material;
      autodeskInteractiveShader: UnityEngine.Shader;
      autodeskInteractiveTransparentShader: UnityEngine.Shader;
      autodeskInteractiveMaskedShader: UnityEngine.Shader;
      terrainDetailLitShader: UnityEngine.Shader;
      terrainDetailGrassShader: UnityEngine.Shader;
      terrainDetailGrassBillboardShader: UnityEngine.Shader;
      defaultParticleMaterial: UnityEngine.Material;
      defaultLineMaterial: UnityEngine.Material;
      defaultTerrainMaterial: UnityEngine.Material;
      defaultUIMaterial: UnityEngine.Material;
      defaultUIOverdrawMaterial: UnityEngine.Material;
      defaultUIETC1SupportedMaterial: UnityEngine.Material;
      default2DMaterial: UnityEngine.Material;
      defaultShader: UnityEngine.Shader;
      defaultSpeedTree7Shader: UnityEngine.Shader;
      defaultSpeedTree8Shader: UnityEngine.Shader;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetDirty: (() => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface RenderPipelineManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface RenderQueueRange {
      lowerBound: number;
      upperBound: number;
      Equals: ((other: UnityEngine.Rendering.RenderQueueRange) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface RenderStateBlock {
      blendState: UnityEngine.Rendering.BlendState;
      rasterState: UnityEngine.Rendering.RasterState;
      depthState: UnityEngine.Rendering.DepthState;
      stencilState: UnityEngine.Rendering.StencilState;
      stencilReference: number;
      mask: UnityEngine.Rendering.RenderStateMask;
      Equals: ((other: UnityEngine.Rendering.RenderStateBlock) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum RenderStateMask {
      Nothing = 0,
      Blend = 1,
      Raster = 2,
      Depth = 4,
      Stencil = 8,
      Everything = 15,
    }
    export interface RenderTargetBlendState {
      writeMask: UnityEngine.Rendering.ColorWriteMask;
      sourceColorBlendMode: UnityEngine.Rendering.BlendMode;
      destinationColorBlendMode: UnityEngine.Rendering.BlendMode;
      sourceAlphaBlendMode: UnityEngine.Rendering.BlendMode;
      destinationAlphaBlendMode: UnityEngine.Rendering.BlendMode;
      colorBlendOperation: UnityEngine.Rendering.BlendOp;
      alphaBlendOperation: UnityEngine.Rendering.BlendOp;
      Equals: ((other: UnityEngine.Rendering.RenderTargetBlendState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScopedRenderPass {
      Dispose: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScopedSubPass {
      Dispose: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScriptableRenderContext {
      BeginRenderPass: ((width: number, height: number, samples: number, attachments: any, depthAttachmentIndex?: number) => void);
      BeginScopedRenderPass: ((width: number, height: number, samples: number, attachments: any, depthAttachmentIndex?: number) => UnityEngine.Rendering.ScopedRenderPass);
      BeginSubPass: ((colors: any, inputs: any, isDepthReadOnly: boolean, isStencilReadOnly: boolean) => void) | ((colors: any, inputs: any, isDepthStencilReadOnly?: boolean) => void) | ((colors: any, isDepthReadOnly: boolean, isStencilReadOnly: boolean) => void) | ((colors: any, isDepthStencilReadOnly?: boolean) => void);
      BeginScopedSubPass: ((colors: any, inputs: any, isDepthReadOnly: boolean, isStencilReadOnly: boolean) => UnityEngine.Rendering.ScopedSubPass) | ((colors: any, inputs: any, isDepthStencilReadOnly?: boolean) => UnityEngine.Rendering.ScopedSubPass) | ((colors: any, isDepthReadOnly: boolean, isStencilReadOnly: boolean) => UnityEngine.Rendering.ScopedSubPass) | ((colors: any, isDepthStencilReadOnly?: boolean) => UnityEngine.Rendering.ScopedSubPass);
      EndSubPass: (() => void);
      EndRenderPass: (() => void);
      Submit: (() => void);
      ExecuteCommandBuffer: ((commandBuffer: UnityEngine.Rendering.CommandBuffer) => void);
      ExecuteCommandBufferAsync: ((commandBuffer: UnityEngine.Rendering.CommandBuffer, queueType: UnityEngine.Rendering.ComputeQueueType) => void);
      SetupCameraProperties: ((camera: UnityEngine.Camera, stereoSetup?: boolean) => void) | ((camera: UnityEngine.Camera, stereoSetup: boolean, eye: number) => void);
      StereoEndRender: ((camera: UnityEngine.Camera) => void) | ((camera: UnityEngine.Camera, eye: number) => void) | ((camera: UnityEngine.Camera, eye: number, isFinalPass: boolean) => void);
      StartMultiEye: ((camera: UnityEngine.Camera) => void) | ((camera: UnityEngine.Camera, eye: number) => void);
      StopMultiEye: ((camera: UnityEngine.Camera) => void);
      DrawSkybox: ((camera: UnityEngine.Camera) => void);
      InvokeOnRenderObjectCallback: (() => void);
      DrawGizmos: ((camera: UnityEngine.Camera, gizmoSubset: UnityEngine.Rendering.GizmoSubset) => void);
      DrawWireOverlay: ((camera: UnityEngine.Camera) => void);
      DrawUIOverlay: ((camera: UnityEngine.Camera) => void);
      Equals: ((other: UnityEngine.Rendering.ScriptableRenderContext) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ShaderTagId {
      name: string;
      Equals: ((obj: any) => boolean) | ((other: UnityEngine.Rendering.ShaderTagId) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ShadowDrawingSettings {
      cullingResults: UnityEngine.Rendering.CullingResults;
      lightIndex: number;
      useRenderingLayerMaskTest: boolean;
      splitData: UnityEngine.Rendering.ShadowSplitData;
      Equals: ((other: UnityEngine.Rendering.ShadowDrawingSettings) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ShadowSplitData {
      cullingPlaneCount: number;
      cullingSphere: UnityEngine.Vector4;
      shadowCascadeBlendCullingFactor: number;
      GetCullingPlane: ((index: number) => UnityEngine.Plane);
      SetCullingPlane: ((index: number, plane: UnityEngine.Plane) => void);
      Equals: ((other: UnityEngine.Rendering.ShadowSplitData) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum SortingCriteria {
      None = 0,
      SortingLayer = 1,
      RenderQueue = 2,
      BackToFront = 4,
      QuantizedFrontToBack = 8,
      OptimizeStateChanges = 16,
      CanvasOrder = 32,
      RendererPriority = 64,
      CommonOpaque = 59,
      CommonTransparent = 23,
    }
    export interface SortingLayerRange {
      lowerBound: any; // System.Int16
      upperBound: any; // System.Int16
      Equals: ((other: UnityEngine.Rendering.SortingLayerRange) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum DistanceMetric {
      Perspective = 0,
      Orthographic = 1,
      CustomAxis = 2,
    }
    export interface SortingSettings {
      worldToCameraMatrix: UnityEngine.Matrix4x4;
      cameraPosition: UnityEngine.Vector3;
      customAxis: UnityEngine.Vector3;
      criteria: UnityEngine.Rendering.SortingCriteria;
      distanceMetric: UnityEngine.Rendering.DistanceMetric;
      Equals: ((other: UnityEngine.Rendering.SortingSettings) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface StencilState {
      enabled: boolean;
      readMask: any; // System.Byte
      writeMask: any; // System.Byte
      compareFunctionFront: UnityEngine.Rendering.CompareFunction;
      passOperationFront: UnityEngine.Rendering.StencilOp;
      failOperationFront: UnityEngine.Rendering.StencilOp;
      zFailOperationFront: UnityEngine.Rendering.StencilOp;
      compareFunctionBack: UnityEngine.Rendering.CompareFunction;
      passOperationBack: UnityEngine.Rendering.StencilOp;
      failOperationBack: UnityEngine.Rendering.StencilOp;
      zFailOperationBack: UnityEngine.Rendering.StencilOp;
      SetCompareFunction: ((value: UnityEngine.Rendering.CompareFunction) => void);
      SetPassOperation: ((value: UnityEngine.Rendering.StencilOp) => void);
      SetFailOperation: ((value: UnityEngine.Rendering.StencilOp) => void);
      SetZFailOperation: ((value: UnityEngine.Rendering.StencilOp) => void);
      Equals: ((other: UnityEngine.Rendering.StencilState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface SupportedRenderingFeatures {
      reflectionProbeModes: UnityEngine.Rendering.SupportedRenderingFeatures_ReflectionProbeModes;
      defaultMixedLightingModes: UnityEngine.Rendering.SupportedRenderingFeatures_LightmapMixedBakeModes;
      mixedLightingModes: UnityEngine.Rendering.SupportedRenderingFeatures_LightmapMixedBakeModes;
      lightmapBakeTypes: UnityEngine.LightmapBakeType;
      lightmapsModes: UnityEngine.LightmapsMode;
      enlighten: boolean;
      lightProbeProxyVolumes: boolean;
      motionVectors: boolean;
      receiveShadows: boolean;
      reflectionProbes: boolean;
      rendererPriority: boolean;
      terrainDetailUnsupported: boolean;
      rendersUIOverlay: boolean;
      overridesEnvironmentLighting: boolean;
      overridesFog: boolean;
      overridesRealtimeReflectionProbes: boolean;
      overridesOtherLightingSettings: boolean;
      editableMaterialRenderQueue: boolean;
      overridesLODBias: boolean;
      overridesMaximumLODLevel: boolean;
      rendererProbes: boolean;
      particleSystemInstancing: boolean;
      overridesShadowmask: boolean;
      overrideShadowmaskMessage: string;
      shadowmaskMessage: string;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum SupportedRenderingFeatures_ReflectionProbeModes {
      None = 0,
      Rotation = 1,
    }
    export enum SupportedRenderingFeatures_LightmapMixedBakeModes {
      None = 0,
      IndirectOnly = 1,
      Subtractive = 2,
      Shadowmask = 4,
    }
    export interface VisibleLight {
      light: UnityEngine.Light;
      lightType: UnityEngine.LightType;
      finalColor: UnityEngine.Color;
      screenRect: UnityEngine.Rect;
      localToWorldMatrix: UnityEngine.Matrix4x4;
      range: number;
      spotAngle: number;
      intersectsNearPlane: boolean;
      intersectsFarPlane: boolean;
      Equals: ((other: UnityEngine.Rendering.VisibleLight) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface VisibleReflectionProbe {
      texture: UnityEngine.Texture;
      reflectionProbe: UnityEngine.ReflectionProbe;
      bounds: UnityEngine.Bounds;
      localToWorldMatrix: UnityEngine.Matrix4x4;
      hdrData: UnityEngine.Vector4;
      center: UnityEngine.Vector3;
      blendDistance: number;
      importance: number;
      isBoxProjection: boolean;
      Equals: ((other: UnityEngine.Rendering.VisibleReflectionProbe) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PlatformKeywordSet {
      IsEnabled: ((define: UnityEngine.Rendering.BuiltinShaderDefine) => boolean);
      Enable: ((define: UnityEngine.Rendering.BuiltinShaderDefine) => void);
      Disable: ((define: UnityEngine.Rendering.BuiltinShaderDefine) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ShaderKeywordType {
      None = 0,
      BuiltinDefault = 2,
      BuiltinExtra = 6,
      BuiltinAutoStripped = 10,
      UserDefined = 16,
    }
    export interface ShaderKeyword {
      index: number;
      IsValid: (() => boolean);
      GetKeywordType: (() => UnityEngine.Rendering.ShaderKeywordType);
      GetKeywordName: (() => string);
      GetName: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ShaderKeywordSet {
      IsEnabled: ((keyword: UnityEngine.Rendering.ShaderKeyword) => boolean);
      Enable: ((keyword: UnityEngine.Rendering.ShaderKeyword) => void);
      Disable: ((keyword: UnityEngine.Rendering.ShaderKeyword) => void);
      GetShaderKeywords: (() => UnityEngine.Rendering.ShaderKeyword[]);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum ShaderPropertyType {
      Color = 0,
      Vector = 1,
      Float = 2,
      Range = 3,
      Texture = 4,
    }
    export enum ShaderPropertyFlags {
      None = 0,
      HideInInspector = 1,
      PerRendererData = 2,
      NoScaleOffset = 4,
      Normal = 8,
      HDR = 16,
      Gamma = 32,
      NonModifiableTextureData = 64,
      MainTexture = 128,
      MainColor = 256,
    }
    export interface SortingGroup {
      sortingLayerName: string;
      sortingLayerID: number;
      sortingOrder: number;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace SceneManagement {
    export interface Scene {
      handle: number;
      path: string;
      name: string;
      isLoaded: boolean;
      buildIndex: number;
      isDirty: boolean;
      rootCount: number;
      isSubScene: boolean;
      IsValid: (() => boolean);
      GetRootGameObjects: (() => UnityEngine.GameObject[]) | ((rootGameObjects: any) => void);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface SceneManagerAPI {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SceneManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum LoadSceneMode {
      Single = 0,
      Additive = 1,
    }
    export enum LocalPhysicsMode {
      None = 0,
      Physics2D = 1,
      Physics3D = 2,
    }
    export interface LoadSceneParameters {
      loadSceneMode: UnityEngine.SceneManagement.LoadSceneMode;
      localPhysicsMode: UnityEngine.SceneManagement.LocalPhysicsMode;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface CreateSceneParameters {
      localPhysicsMode: UnityEngine.SceneManagement.LocalPhysicsMode;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum UnloadSceneOptions {
      None = 0,
      UnloadAllEmbeddedSceneObjects = 1,
    }
    export interface SceneUtility {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Scripting {
    export interface GarbageCollector {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum GarbageCollector_Mode {
      Disabled = 0,
      Enabled = 1,
      Manual = 2,
    }
  }
  export namespace Serialization {
    export interface UnitySurrogateSelector {
      ChainSelector: ((selector: any) => void);
      GetNextSelector: (() => any);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Sprites {
    export interface DataUtility {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace TestTools {
    export interface CoveredSequencePoint {
      method: any; // System.Reflection.MethodBase
      ilOffset: any; // System.UInt32
      hitCount: any; // System.UInt32
      filename: string;
      line: any; // System.UInt32
      column: any; // System.UInt32
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface CoveredMethodStats {
      method: any; // System.Reflection.MethodBase
      totalSequencePoints: number;
      uncoveredSequencePoints: number;
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface Coverage {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace tvOS {
    export interface Remote {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum DeviceGeneration {
      Unknown = 0,
      AppleTV1Gen = 1001,
      AppleTV2Gen = 1002,
    }
    export interface Device {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace U2D {
    export interface PixelPerfectRendering {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SpriteBone {
      name: string;
      position: UnityEngine.Vector3;
      rotation: UnityEngine.Quaternion;
      length: number;
      parentId: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface SpriteDataAccessExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SpriteRendererDataAccessExtensions {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SpriteAtlasManager {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface SpriteAtlas {
      isVariant: boolean;
      tag: string;
      spriteCount: number;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CanBindTo: ((sprite: UnityEngine.Sprite) => boolean);
      GetSprite: ((name: string) => UnityEngine.Sprite);
      GetSprites: ((sprites: UnityEngine.Sprite[]) => number) | ((sprites: UnityEngine.Sprite[], name: string) => number);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
  }
  export namespace UI {
    export interface AnimationTriggers {
      normalTrigger: string;
      highlightedTrigger: string;
      pressedTrigger: string;
      selectedTrigger: string;
      disabledTrigger: string;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Button {
      onClick: UnityEngine.UI.Button_ButtonClickedEvent;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum CanvasUpdate {
      Prelayout = 0,
      Layout = 1,
      PostLayout = 2,
      PreRender = 3,
      LatePreRender = 4,
      MaxUpdateValue = 5,
    }
    export interface ICanvasElement {
      transform: UnityEngine.Transform;
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      IsDestroyed: (() => boolean);
    }
    export interface CanvasUpdateRegistry {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface ColorBlock {
      normalColor: UnityEngine.Color;
      highlightedColor: UnityEngine.Color;
      pressedColor: UnityEngine.Color;
      selectedColor: UnityEngine.Color;
      disabledColor: UnityEngine.Color;
      colorMultiplier: number;
      fadeDuration: number;
      Equals: ((obj: any) => boolean) | ((other: UnityEngine.UI.ColorBlock) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ClipperRegistry {
      Cull: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Clipping {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface IClipper {
      PerformClipping: (() => void);
    }
    export interface IClippable {
      gameObject: UnityEngine.GameObject;
      rectTransform: UnityEngine.RectTransform;
      RecalculateClipping: (() => void);
      Cull: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipRect: ((value: UnityEngine.Rect, validRect: boolean) => void);
      SetClipSoftness: ((clipSoftness: UnityEngine.Vector2) => void);
    }
    export interface DefaultControls {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Dropdown {
      template: UnityEngine.RectTransform;
      captionText: UnityEngine.UI.Text;
      captionImage: UnityEngine.UI.Image;
      itemText: UnityEngine.UI.Text;
      itemImage: UnityEngine.UI.Image;
      options: any; // System.Collections.Generic.List`1[UnityEngine.UI.Dropdown+OptionData]
      onValueChanged: UnityEngine.UI.Dropdown_DropdownEvent;
      alphaFadeSpeed: number;
      value: number;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetValueWithoutNotify: ((input: number) => void);
      RefreshShownValue: (() => void);
      AddOptions: ((options: any) => void) | ((options: any) => void) | ((options: any) => void);
      ClearOptions: (() => void);
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnCancel: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Show: (() => void);
      Hide: (() => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface FontData {
      font: UnityEngine.Font;
      fontSize: number;
      fontStyle: UnityEngine.FontStyle;
      bestFit: boolean;
      minSize: number;
      maxSize: number;
      alignment: UnityEngine.TextAnchor;
      alignByGeometry: boolean;
      richText: boolean;
      horizontalOverflow: UnityEngine.HorizontalWrapMode;
      verticalOverflow: UnityEngine.VerticalWrapMode;
      lineSpacing: number;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface FontUpdateTracker {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Graphic {
      color: UnityEngine.Color;
      raycastTarget: boolean;
      raycastPadding: UnityEngine.Vector4;
      depth: number;
      rectTransform: UnityEngine.RectTransform;
      canvas: UnityEngine.Canvas;
      canvasRenderer: UnityEngine.CanvasRenderer;
      defaultMaterial: UnityEngine.Material;
      material: UnityEngine.Material;
      materialForRendering: UnityEngine.Material;
      mainTexture: UnityEngine.Texture;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetAllDirty: (() => void);
      SetLayoutDirty: (() => void);
      SetVerticesDirty: (() => void);
      SetMaterialDirty: (() => void);
      OnCullingChanged: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnRebuildRequested: (() => void);
      SetNativeSize: (() => void);
      Raycast: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PixelAdjustPoint: ((point: UnityEngine.Vector2) => UnityEngine.Vector2);
      GetPixelAdjustedRect: (() => UnityEngine.Rect);
      CrossFadeColor: ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean) => void) | ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean) => void);
      CrossFadeAlpha: ((alpha: number, duration: number, ignoreTimeScale: boolean) => void);
      RegisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface GraphicRaycaster {
      sortOrderPriority: number;
      renderOrderPriority: number;
      ignoreReversedGraphics: boolean;
      blockingObjects: UnityEngine.UI.GraphicRaycaster_BlockingObjects;
      blockingMask: UnityEngine.LayerMask;
      eventCamera: UnityEngine.Camera;
      priority: number;
      rootRaycaster: UnityEngine.EventSystems.BaseRaycaster;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Raycast: ((eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: any) => void);
      ToString: (() => string);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      GetType: (() => any);
    }
    export interface GraphicRebuildTracker {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface GraphicRegistry {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface IMask {
      rectTransform: UnityEngine.RectTransform;
      Enabled: (() => boolean);
    }
    export interface IMaskable {
      RecalculateMasking: (() => void);
    }
    export interface Image {
      sprite: UnityEngine.Sprite;
      overrideSprite: UnityEngine.Sprite;
      type: UnityEngine.UI.Image_Type;
      preserveAspect: boolean;
      fillCenter: boolean;
      fillMethod: UnityEngine.UI.Image_FillMethod;
      fillAmount: number;
      fillClockwise: boolean;
      fillOrigin: number;
      eventAlphaThreshold: number;
      alphaHitTestMinimumThreshold: number;
      useSpriteMesh: boolean;
      mainTexture: UnityEngine.Texture;
      hasBorder: boolean;
      pixelsPerUnitMultiplier: number;
      pixelsPerUnit: number;
      material: UnityEngine.Material;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      onCullStateChanged: UnityEngine.UI.MaskableGraphic_CullStateChangedEvent;
      maskable: boolean;
      isMaskingGraphic: boolean;
      color: UnityEngine.Color;
      raycastTarget: boolean;
      raycastPadding: UnityEngine.Vector4;
      depth: number;
      rectTransform: UnityEngine.RectTransform;
      canvas: UnityEngine.Canvas;
      canvasRenderer: UnityEngine.CanvasRenderer;
      defaultMaterial: UnityEngine.Material;
      materialForRendering: UnityEngine.Material;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      DisableSpriteOptimizations: (() => void);
      OnBeforeSerialize: (() => void);
      OnAfterDeserialize: (() => void);
      SetNativeSize: (() => void);
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      IsRaycastLocationValid: ((screenPoint: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
      Cull: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipRect: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipSoftness: ((clipSoftness: UnityEngine.Vector2) => void);
      ParentMaskStateChanged: (() => void);
      RecalculateClipping: (() => void);
      RecalculateMasking: (() => void);
      SetAllDirty: (() => void);
      SetLayoutDirty: (() => void);
      SetVerticesDirty: (() => void);
      SetMaterialDirty: (() => void);
      OnCullingChanged: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnRebuildRequested: (() => void);
      Raycast: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PixelAdjustPoint: ((point: UnityEngine.Vector2) => UnityEngine.Vector2);
      GetPixelAdjustedRect: (() => UnityEngine.Rect);
      CrossFadeColor: ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean) => void) | ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean) => void);
      CrossFadeAlpha: ((alpha: number, duration: number, ignoreTimeScale: boolean) => void);
      RegisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface InputField {
      shouldHideMobileInput: boolean;
      text: string;
      isFocused: boolean;
      caretBlinkRate: number;
      caretWidth: number;
      textComponent: UnityEngine.UI.Text;
      placeholder: UnityEngine.UI.Graphic;
      caretColor: UnityEngine.Color;
      customCaretColor: boolean;
      selectionColor: UnityEngine.Color;
      onEndEdit: UnityEngine.UI.InputField_SubmitEvent;
      onValueChange: UnityEngine.UI.InputField_OnChangeEvent;
      onValueChanged: UnityEngine.UI.InputField_OnChangeEvent;
      onValidateInput: UnityEngine.UI.InputField_OnValidateInput;
      characterLimit: number;
      contentType: UnityEngine.UI.InputField_ContentType;
      lineType: UnityEngine.UI.InputField_LineType;
      inputType: UnityEngine.UI.InputField_InputType;
      touchScreenKeyboard: UnityEngine.TouchScreenKeyboard;
      keyboardType: UnityEngine.TouchScreenKeyboardType;
      characterValidation: UnityEngine.UI.InputField_CharacterValidation;
      readOnly: boolean;
      multiLine: boolean;
      asteriskChar: any; // System.Char
      wasCanceled: boolean;
      caretSelectPosition: number;
      caretPosition: number;
      selectionAnchorPosition: number;
      selectionFocusPosition: number;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetTextWithoutNotify: ((input: string) => void);
      MoveTextEnd: ((shift: boolean) => void);
      MoveTextStart: ((shift: boolean) => void);
      ScreenToLocal: ((screen: UnityEngine.Vector2) => UnityEngine.Vector2);
      OnBeginDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnEndDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      ProcessEvent: ((e: UnityEngine.Event) => void);
      OnUpdateSelected: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      ForceLabelUpdate: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      ActivateInputField: (() => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      DeactivateInputField: (() => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface AspectRatioFitter {
      aspectMode: UnityEngine.UI.AspectRatioFitter_AspectMode;
      aspectRatio: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsComponentValidOnObject: (() => boolean);
      IsAspectModeValid: (() => boolean);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface CanvasScaler {
      uiScaleMode: UnityEngine.UI.CanvasScaler_ScaleMode;
      referencePixelsPerUnit: number;
      scaleFactor: number;
      referenceResolution: UnityEngine.Vector2;
      screenMatchMode: UnityEngine.UI.CanvasScaler_ScreenMatchMode;
      matchWidthOrHeight: number;
      physicalUnit: UnityEngine.UI.CanvasScaler_Unit;
      fallbackScreenDPI: number;
      defaultSpriteDPI: number;
      dynamicPixelsPerUnit: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ContentSizeFitter {
      horizontalFit: UnityEngine.UI.ContentSizeFitter_FitMode;
      verticalFit: UnityEngine.UI.ContentSizeFitter_FitMode;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface GridLayoutGroup {
      startCorner: UnityEngine.UI.GridLayoutGroup_Corner;
      startAxis: UnityEngine.UI.GridLayoutGroup_Axis;
      cellSize: UnityEngine.Vector2;
      spacing: UnityEngine.Vector2;
      constraint: UnityEngine.UI.GridLayoutGroup_Constraint;
      constraintCount: number;
      padding: UnityEngine.RectOffset;
      childAlignment: UnityEngine.TextAnchor;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface HorizontalLayoutGroup {
      spacing: number;
      childForceExpandWidth: boolean;
      childForceExpandHeight: boolean;
      childControlWidth: boolean;
      childControlHeight: boolean;
      childScaleWidth: boolean;
      childScaleHeight: boolean;
      reverseArrangement: boolean;
      padding: UnityEngine.RectOffset;
      childAlignment: UnityEngine.TextAnchor;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface HorizontalOrVerticalLayoutGroup {
      spacing: number;
      childForceExpandWidth: boolean;
      childForceExpandHeight: boolean;
      childControlWidth: boolean;
      childControlHeight: boolean;
      childScaleWidth: boolean;
      childScaleHeight: boolean;
      reverseArrangement: boolean;
      padding: UnityEngine.RectOffset;
      childAlignment: UnityEngine.TextAnchor;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ILayoutElement {
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
    }
    export interface ILayoutController {
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
    }
    export interface ILayoutGroup {
    }
    export interface ILayoutSelfController {
    }
    export interface ILayoutIgnorer {
      ignoreLayout: boolean;
    }
    export interface LayoutElement {
      ignoreLayout: boolean;
      minWidth: number;
      minHeight: number;
      preferredWidth: number;
      preferredHeight: number;
      flexibleWidth: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface LayoutGroup {
      padding: UnityEngine.RectOffset;
      childAlignment: UnityEngine.TextAnchor;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface LayoutRebuilder {
      transform: UnityEngine.Transform;
      IsDestroyed: (() => boolean);
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      GetHashCode: (() => number);
      Equals: ((obj: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface LayoutUtility {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface VerticalLayoutGroup {
      spacing: number;
      childForceExpandWidth: boolean;
      childForceExpandHeight: boolean;
      childControlWidth: boolean;
      childControlHeight: boolean;
      childScaleWidth: boolean;
      childScaleHeight: boolean;
      reverseArrangement: boolean;
      padding: UnityEngine.RectOffset;
      childAlignment: UnityEngine.TextAnchor;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Mask {
      rectTransform: UnityEngine.RectTransform;
      showMaskGraphic: boolean;
      graphic: UnityEngine.UI.Graphic;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      MaskEnabled: (() => boolean);
      OnSiblingGraphicEnabledDisabled: (() => void);
      IsRaycastLocationValid: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface MaskUtilities {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface MaskableGraphic {
      onCullStateChanged: UnityEngine.UI.MaskableGraphic_CullStateChangedEvent;
      maskable: boolean;
      isMaskingGraphic: boolean;
      color: UnityEngine.Color;
      raycastTarget: boolean;
      raycastPadding: UnityEngine.Vector4;
      depth: number;
      rectTransform: UnityEngine.RectTransform;
      canvas: UnityEngine.Canvas;
      canvasRenderer: UnityEngine.CanvasRenderer;
      defaultMaterial: UnityEngine.Material;
      material: UnityEngine.Material;
      materialForRendering: UnityEngine.Material;
      mainTexture: UnityEngine.Texture;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
      Cull: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipRect: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipSoftness: ((clipSoftness: UnityEngine.Vector2) => void);
      ParentMaskStateChanged: (() => void);
      RecalculateClipping: (() => void);
      RecalculateMasking: (() => void);
      SetAllDirty: (() => void);
      SetLayoutDirty: (() => void);
      SetVerticesDirty: (() => void);
      SetMaterialDirty: (() => void);
      OnCullingChanged: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnRebuildRequested: (() => void);
      SetNativeSize: (() => void);
      Raycast: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PixelAdjustPoint: ((point: UnityEngine.Vector2) => UnityEngine.Vector2);
      GetPixelAdjustedRect: (() => UnityEngine.Rect);
      CrossFadeColor: ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean) => void) | ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean) => void);
      CrossFadeAlpha: ((alpha: number, duration: number, ignoreTimeScale: boolean) => void);
      RegisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface IMaterialModifier {
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
    }
    export interface Navigation {
      mode: UnityEngine.UI.Navigation_Mode;
      wrapAround: boolean;
      selectOnUp: UnityEngine.UI.Selectable;
      selectOnDown: UnityEngine.UI.Selectable;
      selectOnLeft: UnityEngine.UI.Selectable;
      selectOnRight: UnityEngine.UI.Selectable;
      Equals: ((other: UnityEngine.UI.Navigation) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface RawImage {
      mainTexture: UnityEngine.Texture;
      texture: UnityEngine.Texture;
      uvRect: UnityEngine.Rect;
      onCullStateChanged: UnityEngine.UI.MaskableGraphic_CullStateChangedEvent;
      maskable: boolean;
      isMaskingGraphic: boolean;
      color: UnityEngine.Color;
      raycastTarget: boolean;
      raycastPadding: UnityEngine.Vector4;
      depth: number;
      rectTransform: UnityEngine.RectTransform;
      canvas: UnityEngine.Canvas;
      canvasRenderer: UnityEngine.CanvasRenderer;
      defaultMaterial: UnityEngine.Material;
      material: UnityEngine.Material;
      materialForRendering: UnityEngine.Material;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetNativeSize: (() => void);
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
      Cull: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipRect: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipSoftness: ((clipSoftness: UnityEngine.Vector2) => void);
      ParentMaskStateChanged: (() => void);
      RecalculateClipping: (() => void);
      RecalculateMasking: (() => void);
      SetAllDirty: (() => void);
      SetLayoutDirty: (() => void);
      SetVerticesDirty: (() => void);
      SetMaterialDirty: (() => void);
      OnCullingChanged: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnRebuildRequested: (() => void);
      Raycast: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PixelAdjustPoint: ((point: UnityEngine.Vector2) => UnityEngine.Vector2);
      GetPixelAdjustedRect: (() => UnityEngine.Rect);
      CrossFadeColor: ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean) => void) | ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean) => void);
      CrossFadeAlpha: ((alpha: number, duration: number, ignoreTimeScale: boolean) => void);
      RegisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface RectMask2D {
      padding: UnityEngine.Vector4;
      softness: UnityEngine.Vector2Int;
      canvasRect: UnityEngine.Rect;
      rectTransform: UnityEngine.RectTransform;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      IsRaycastLocationValid: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PerformClipping: (() => void);
      UpdateClipSoftness: (() => void);
      AddClippable: ((clippable: UnityEngine.UI.IClippable) => void);
      RemoveClippable: ((clippable: UnityEngine.UI.IClippable) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ScrollRect {
      content: UnityEngine.RectTransform;
      horizontal: boolean;
      vertical: boolean;
      movementType: UnityEngine.UI.ScrollRect_MovementType;
      elasticity: number;
      inertia: boolean;
      decelerationRate: number;
      scrollSensitivity: number;
      viewport: UnityEngine.RectTransform;
      horizontalScrollbar: UnityEngine.UI.Scrollbar;
      verticalScrollbar: UnityEngine.UI.Scrollbar;
      horizontalScrollbarVisibility: UnityEngine.UI.ScrollRect_ScrollbarVisibility;
      verticalScrollbarVisibility: UnityEngine.UI.ScrollRect_ScrollbarVisibility;
      horizontalScrollbarSpacing: number;
      verticalScrollbarSpacing: number;
      onValueChanged: UnityEngine.UI.ScrollRect_ScrollRectEvent;
      velocity: UnityEngine.Vector2;
      normalizedPosition: UnityEngine.Vector2;
      horizontalNormalizedPosition: number;
      verticalNormalizedPosition: number;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      IsActive: (() => boolean);
      StopMovement: (() => void);
      OnScroll: ((data: UnityEngine.EventSystems.PointerEventData) => void);
      OnInitializePotentialDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnBeginDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnEndDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      SetLayoutHorizontal: (() => void);
      SetLayoutVertical: (() => void);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Scrollbar {
      handleRect: UnityEngine.RectTransform;
      direction: UnityEngine.UI.Scrollbar_Direction;
      value: number;
      size: number;
      numberOfSteps: number;
      onValueChanged: UnityEngine.UI.Scrollbar_ScrollEvent;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetValueWithoutNotify: ((input: number) => void);
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnBeginDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnInitializePotentialDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      SetDirection: ((direction: UnityEngine.UI.Scrollbar_Direction, includeRectLayouts: boolean) => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Selectable {
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Slider {
      fillRect: UnityEngine.RectTransform;
      handleRect: UnityEngine.RectTransform;
      direction: UnityEngine.UI.Slider_Direction;
      minValue: number;
      maxValue: number;
      wholeNumbers: boolean;
      value: number;
      normalizedValue: number;
      onValueChanged: UnityEngine.UI.Slider_SliderEvent;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      SetValueWithoutNotify: ((input: number) => void);
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnInitializePotentialDrag: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      SetDirection: ((direction: UnityEngine.UI.Slider_Direction, includeRectLayouts: boolean) => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface SpriteState {
      highlightedSprite: UnityEngine.Sprite;
      pressedSprite: UnityEngine.Sprite;
      selectedSprite: UnityEngine.Sprite;
      disabledSprite: UnityEngine.Sprite;
      Equals: ((other: UnityEngine.UI.SpriteState) => boolean) | ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface StencilMaterial {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Text {
      cachedTextGenerator: UnityEngine.TextGenerator;
      cachedTextGeneratorForLayout: UnityEngine.TextGenerator;
      mainTexture: UnityEngine.Texture;
      font: UnityEngine.Font;
      text: string;
      supportRichText: boolean;
      resizeTextForBestFit: boolean;
      resizeTextMinSize: number;
      resizeTextMaxSize: number;
      alignment: UnityEngine.TextAnchor;
      alignByGeometry: boolean;
      fontSize: number;
      horizontalOverflow: UnityEngine.HorizontalWrapMode;
      verticalOverflow: UnityEngine.VerticalWrapMode;
      lineSpacing: number;
      fontStyle: UnityEngine.FontStyle;
      pixelsPerUnit: number;
      minWidth: number;
      preferredWidth: number;
      flexibleWidth: number;
      minHeight: number;
      preferredHeight: number;
      flexibleHeight: number;
      layoutPriority: number;
      onCullStateChanged: UnityEngine.UI.MaskableGraphic_CullStateChangedEvent;
      maskable: boolean;
      isMaskingGraphic: boolean;
      color: UnityEngine.Color;
      raycastTarget: boolean;
      raycastPadding: UnityEngine.Vector4;
      depth: number;
      rectTransform: UnityEngine.RectTransform;
      canvas: UnityEngine.Canvas;
      canvasRenderer: UnityEngine.CanvasRenderer;
      defaultMaterial: UnityEngine.Material;
      material: UnityEngine.Material;
      materialForRendering: UnityEngine.Material;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      FontTextureChanged: (() => void);
      GetGenerationSettings: ((extents: UnityEngine.Vector2) => UnityEngine.TextGenerationSettings);
      CalculateLayoutInputHorizontal: (() => void);
      CalculateLayoutInputVertical: (() => void);
      OnRebuildRequested: (() => void);
      GetModifiedMaterial: ((baseMaterial: UnityEngine.Material) => UnityEngine.Material);
      Cull: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipRect: ((clipRect: UnityEngine.Rect, validRect: boolean) => void);
      SetClipSoftness: ((clipSoftness: UnityEngine.Vector2) => void);
      ParentMaskStateChanged: (() => void);
      RecalculateClipping: (() => void);
      RecalculateMasking: (() => void);
      SetAllDirty: (() => void);
      SetLayoutDirty: (() => void);
      SetVerticesDirty: (() => void);
      SetMaterialDirty: (() => void);
      OnCullingChanged: (() => void);
      Rebuild: ((update: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      SetNativeSize: (() => void);
      Raycast: ((sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera) => boolean);
      PixelAdjustPoint: ((point: UnityEngine.Vector2) => UnityEngine.Vector2);
      GetPixelAdjustedRect: (() => UnityEngine.Rect);
      CrossFadeColor: ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean) => void) | ((targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean) => void);
      CrossFadeAlpha: ((alpha: number, duration: number, ignoreTimeScale: boolean) => void);
      RegisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyLayoutCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyVerticesCallback: ((action: UnityEngine.Events.UnityAction) => void);
      RegisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      UnregisterDirtyMaterialCallback: ((action: UnityEngine.Events.UnityAction) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Toggle {
      group: UnityEngine.UI.ToggleGroup;
      isOn: boolean;
      navigation: UnityEngine.UI.Navigation;
      transition: UnityEngine.UI.Selectable_Transition;
      colors: UnityEngine.UI.ColorBlock;
      spriteState: UnityEngine.UI.SpriteState;
      animationTriggers: UnityEngine.UI.AnimationTriggers;
      targetGraphic: UnityEngine.UI.Graphic;
      interactable: boolean;
      image: UnityEngine.UI.Image;
      animator: UnityEngine.Animator;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      toggleTransition: UnityEngine.UI.Toggle_ToggleTransition;
      graphic: UnityEngine.UI.Graphic;
      onValueChanged: UnityEngine.UI.Toggle_ToggleEvent;
      Rebuild: ((executing: UnityEngine.UI.CanvasUpdate) => void);
      LayoutComplete: (() => void);
      GraphicUpdateComplete: (() => void);
      SetIsOnWithoutNotify: ((value: boolean) => void);
      OnPointerClick: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSubmit: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      IsInteractable: (() => boolean);
      FindSelectable: ((dir: UnityEngine.Vector3) => UnityEngine.UI.Selectable);
      FindSelectableOnLeft: (() => UnityEngine.UI.Selectable);
      FindSelectableOnRight: (() => UnityEngine.UI.Selectable);
      FindSelectableOnUp: (() => UnityEngine.UI.Selectable);
      FindSelectableOnDown: (() => UnityEngine.UI.Selectable);
      OnMove: ((eventData: UnityEngine.EventSystems.AxisEventData) => void);
      OnPointerDown: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerUp: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerEnter: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnPointerExit: ((eventData: UnityEngine.EventSystems.PointerEventData) => void);
      OnSelect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      OnDeselect: ((eventData: UnityEngine.EventSystems.BaseEventData) => void);
      Select: (() => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface ToggleGroup {
      allowSwitchOff: boolean;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      NotifyToggleOn: ((toggle: UnityEngine.UI.Toggle, sendCallback?: boolean) => void);
      UnregisterToggle: ((toggle: UnityEngine.UI.Toggle) => void);
      RegisterToggle: ((toggle: UnityEngine.UI.Toggle) => void);
      EnsureValidState: (() => void);
      AnyTogglesOn: (() => boolean);
      ActiveToggles: (() => any);
      GetFirstActiveToggle: (() => UnityEngine.UI.Toggle);
      SetAllTogglesOff: ((sendCallback?: boolean) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface VertexHelper {
      currentVertCount: number;
      currentIndexCount: number;
      Dispose: (() => void);
      Clear: (() => void);
      SetUIVertex: ((vertex: UnityEngine.UIVertex, i: number) => void);
      FillMesh: ((mesh: UnityEngine.Mesh) => void);
      AddVert: ((position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector4, uv1: UnityEngine.Vector4, uv2: UnityEngine.Vector4, uv3: UnityEngine.Vector4, normal: UnityEngine.Vector3, tangent: UnityEngine.Vector4) => void) | ((position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector4, uv1: UnityEngine.Vector4, normal: UnityEngine.Vector3, tangent: UnityEngine.Vector4) => void) | ((position: UnityEngine.Vector3, color: UnityEngine.Color32, uv0: UnityEngine.Vector4) => void) | ((v: UnityEngine.UIVertex) => void);
      AddTriangle: ((idx0: number, idx1: number, idx2: number) => void);
      AddUIVertexQuad: ((verts: UnityEngine.UIVertex[]) => void);
      AddUIVertexStream: ((verts: any, indices: any) => void);
      AddUIVertexTriangleStream: ((verts: any) => void);
      GetUIVertexStream: ((stream: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface BaseVertexEffect {
      ModifyVertices: ((vertices: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface BaseMeshEffect {
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      ModifyMesh: ((mesh: UnityEngine.Mesh) => void) | ((vh: UnityEngine.UI.VertexHelper) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface IVertexModifier {
      ModifyVertices: ((verts: any) => void);
    }
    export interface IMeshModifier {
      ModifyMesh: ((mesh: UnityEngine.Mesh) => void) | ((verts: UnityEngine.UI.VertexHelper) => void);
    }
    export interface Outline {
      effectColor: UnityEngine.Color;
      effectDistance: UnityEngine.Vector2;
      useGraphicAlpha: boolean;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      ModifyMesh: ((vh: UnityEngine.UI.VertexHelper) => void) | ((mesh: UnityEngine.Mesh) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface PositionAsUV1 {
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      ModifyMesh: ((vh: UnityEngine.UI.VertexHelper) => void) | ((mesh: UnityEngine.Mesh) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Shadow {
      effectColor: UnityEngine.Color;
      effectDistance: UnityEngine.Vector2;
      useGraphicAlpha: boolean;
      useGUILayout: boolean;
      runInEditMode: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      ModifyMesh: ((vh: UnityEngine.UI.VertexHelper) => void) | ((mesh: UnityEngine.Mesh) => void);
      IsActive: (() => boolean);
      IsDestroyed: (() => boolean);
      IsInvoking: (() => boolean) | ((methodName: string) => boolean);
      CancelInvoke: (() => void) | ((methodName: string) => void);
      Invoke: ((methodName: string, time: number) => void);
      InvokeRepeating: ((methodName: string, time: number, repeatRate: number) => void);
      StartCoroutine: ((methodName: string) => UnityEngine.Coroutine) | ((methodName: string, value: any) => UnityEngine.Coroutine) | ((routine: any) => UnityEngine.Coroutine);
      StartCoroutine_Auto: ((routine: any) => UnityEngine.Coroutine);
      StopCoroutine: ((routine: any) => void) | ((routine: UnityEngine.Coroutine) => void) | ((methodName: string) => void);
      StopAllCoroutines: (() => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Button_ButtonClickedEvent {
      AddListener: ((call: UnityEngine.Events.UnityAction) => void);
      RemoveListener: ((call: UnityEngine.Events.UnityAction) => void);
      Invoke: (() => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface DefaultControls_IFactoryControls {
      CreateGameObject: ((name: string, components: any) => UnityEngine.GameObject);
    }
    export interface DefaultControls_Resources {
      standard: UnityEngine.Sprite;
      background: UnityEngine.Sprite;
      inputField: UnityEngine.Sprite;
      knob: UnityEngine.Sprite;
      checkmark: UnityEngine.Sprite;
      dropdown: UnityEngine.Sprite;
      mask: UnityEngine.Sprite;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Dropdown_OptionData {
      text: string;
      image: UnityEngine.Sprite;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Dropdown_OptionDataList {
      options: any; // System.Collections.Generic.List`1[UnityEngine.UI.Dropdown+OptionData]
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Dropdown_DropdownEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: number) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum GraphicRaycaster_BlockingObjects {
      None = 0,
      TwoD = 1,
      ThreeD = 2,
      All = 3,
    }
    export enum Image_Type {
      Simple = 0,
      Sliced = 1,
      Tiled = 2,
      Filled = 3,
    }
    export enum Image_FillMethod {
      Horizontal = 0,
      Vertical = 1,
      Radial90 = 2,
      Radial180 = 3,
      Radial360 = 4,
    }
    export enum Image_OriginHorizontal {
      Left = 0,
      Right = 1,
    }
    export enum Image_OriginVertical {
      Bottom = 0,
      Top = 1,
    }
    export enum Image_Origin90 {
      BottomLeft = 0,
      TopLeft = 1,
      TopRight = 2,
      BottomRight = 3,
    }
    export enum Image_Origin180 {
      Bottom = 0,
      Left = 1,
      Top = 2,
      Right = 3,
    }
    export enum Image_Origin360 {
      Bottom = 0,
      Right = 1,
      Top = 2,
      Left = 3,
    }
    export enum InputField_ContentType {
      Standard = 0,
      Autocorrected = 1,
      IntegerNumber = 2,
      DecimalNumber = 3,
      Alphanumeric = 4,
      Name = 5,
      EmailAddress = 6,
      Password = 7,
      Pin = 8,
      Custom = 9,
    }
    export enum InputField_InputType {
      Standard = 0,
      AutoCorrect = 1,
      Password = 2,
    }
    export enum InputField_CharacterValidation {
      None = 0,
      Integer = 1,
      Decimal = 2,
      Alphanumeric = 3,
      Name = 4,
      EmailAddress = 5,
    }
    export enum InputField_LineType {
      SingleLine = 0,
      MultiLineSubmit = 1,
      MultiLineNewline = 2,
    }
    export interface InputField_OnValidateInput {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((text: string, charIndex: number, addedChar: any) => any);
      BeginInvoke: ((text: string, charIndex: number, addedChar: any, callback: any, object: any) => any);
      EndInvoke: ((result: any) => any);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface InputField_SubmitEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: string) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export interface InputField_OnChangeEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: string) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum AspectRatioFitter_AspectMode {
      None = 0,
      WidthControlsHeight = 1,
      HeightControlsWidth = 2,
      FitInParent = 3,
      EnvelopeParent = 4,
    }
    export enum CanvasScaler_ScaleMode {
      ConstantPixelSize = 0,
      ScaleWithScreenSize = 1,
      ConstantPhysicalSize = 2,
    }
    export enum CanvasScaler_ScreenMatchMode {
      MatchWidthOrHeight = 0,
      Expand = 1,
      Shrink = 2,
    }
    export enum CanvasScaler_Unit {
      Centimeters = 0,
      Millimeters = 1,
      Inches = 2,
      Points = 3,
      Picas = 4,
    }
    export enum ContentSizeFitter_FitMode {
      Unconstrained = 0,
      MinSize = 1,
      PreferredSize = 2,
    }
    export enum GridLayoutGroup_Corner {
      UpperLeft = 0,
      UpperRight = 1,
      LowerLeft = 2,
      LowerRight = 3,
    }
    export enum GridLayoutGroup_Axis {
      Horizontal = 0,
      Vertical = 1,
    }
    export enum GridLayoutGroup_Constraint {
      Flexible = 0,
      FixedColumnCount = 1,
      FixedRowCount = 2,
    }
    export interface MaskableGraphic_CullStateChangedEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: boolean) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum Navigation_Mode {
      None = 0,
      Horizontal = 1,
      Vertical = 2,
      Automatic = 3,
      Explicit = 4,
    }
    export enum ScrollRect_MovementType {
      Unrestricted = 0,
      Elastic = 1,
      Clamped = 2,
    }
    export enum ScrollRect_ScrollbarVisibility {
      Permanent = 0,
      AutoHide = 1,
      AutoHideAndExpandViewport = 2,
    }
    export interface ScrollRect_ScrollRectEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: UnityEngine.Vector2) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum Scrollbar_Direction {
      LeftToRight = 0,
      RightToLeft = 1,
      BottomToTop = 2,
      TopToBottom = 3,
    }
    export interface Scrollbar_ScrollEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: number) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum Selectable_Transition {
      None = 0,
      ColorTint = 1,
      SpriteSwap = 2,
      Animation = 3,
    }
    export enum Slider_Direction {
      LeftToRight = 0,
      RightToLeft = 1,
      BottomToTop = 2,
      TopToBottom = 3,
    }
    export interface Slider_SliderEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: number) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
    export enum Toggle_ToggleTransition {
      None = 0,
      Fade = 1,
    }
    export interface Toggle_ToggleEvent {
      AddListener: ((call: any) => void);
      RemoveListener: ((call: any) => void);
      Invoke: ((arg0: boolean) => void);
      GetPersistentEventCount: (() => number);
      GetPersistentTarget: ((index: number) => UnityEngine.Object);
      GetPersistentMethodName: ((index: number) => string);
      SetPersistentListenerState: ((index: number, state: UnityEngine.Events.UnityEventCallState) => void);
      RemoveAllListeners: (() => void);
      ToString: (() => string);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
    }
  }
  export namespace Video {
    export interface VideoClip {
      originalPath: string;
      frameCount: any; // System.UInt64
      frameRate: number;
      length: number;
      width: any; // System.UInt32
      height: any; // System.UInt32
      pixelAspectRatioNumerator: any; // System.UInt32
      pixelAspectRatioDenominator: any; // System.UInt32
      sRGB: boolean;
      audioTrackCount: any; // System.UInt16
      name: string;
      hideFlags: UnityEngine.HideFlags;
      GetAudioChannelCount: ((audioTrackIdx: any) => any);
      GetAudioSampleRate: ((audioTrackIdx: any) => any);
      GetAudioLanguage: ((audioTrackIdx: any) => string);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export enum VideoRenderMode {
      CameraFarPlane = 0,
      CameraNearPlane = 1,
      RenderTexture = 2,
      MaterialOverride = 3,
      APIOnly = 4,
    }
    export enum Video3DLayout {
      No3D = 0,
      SideBySide3D = 1,
      OverUnder3D = 2,
    }
    export enum VideoAspectRatio {
      NoScaling = 0,
      FitVertically = 1,
      FitHorizontally = 2,
      FitInside = 3,
      FitOutside = 4,
      Stretch = 5,
    }
    export enum VideoTimeSource {
      AudioDSPTimeSource = 0,
      GameTimeSource = 1,
    }
    export enum VideoTimeReference {
      Freerun = 0,
      InternalTime = 1,
      ExternalTime = 2,
    }
    export enum VideoSource {
      VideoClip = 0,
      Url = 1,
    }
    export enum VideoAudioOutputMode {
      None = 0,
      AudioSource = 1,
      Direct = 2,
      APIOnly = 3,
    }
    export interface VideoPlayer {
      source: UnityEngine.Video.VideoSource;
      url: string;
      clip: UnityEngine.Video.VideoClip;
      renderMode: UnityEngine.Video.VideoRenderMode;
      targetCamera: UnityEngine.Camera;
      targetTexture: UnityEngine.RenderTexture;
      targetMaterialRenderer: UnityEngine.Renderer;
      targetMaterialProperty: string;
      aspectRatio: UnityEngine.Video.VideoAspectRatio;
      targetCameraAlpha: number;
      targetCamera3DLayout: UnityEngine.Video.Video3DLayout;
      texture: UnityEngine.Texture;
      isPrepared: boolean;
      waitForFirstFrame: boolean;
      playOnAwake: boolean;
      isPlaying: boolean;
      isPaused: boolean;
      canSetTime: boolean;
      time: number;
      frame: any; // System.Int64
      clockTime: number;
      canStep: boolean;
      canSetPlaybackSpeed: boolean;
      playbackSpeed: number;
      isLooping: boolean;
      canSetTimeSource: boolean;
      timeSource: UnityEngine.Video.VideoTimeSource;
      timeReference: UnityEngine.Video.VideoTimeReference;
      externalReferenceTime: number;
      canSetSkipOnDrop: boolean;
      skipOnDrop: boolean;
      frameCount: any; // System.UInt64
      frameRate: number;
      length: number;
      width: any; // System.UInt32
      height: any; // System.UInt32
      pixelAspectRatioNumerator: any; // System.UInt32
      pixelAspectRatioDenominator: any; // System.UInt32
      audioTrackCount: any; // System.UInt16
      controlledAudioTrackCount: any; // System.UInt16
      audioOutputMode: UnityEngine.Video.VideoAudioOutputMode;
      canSetDirectAudioVolume: boolean;
      sendFrameReadyEvents: boolean;
      enabled: boolean;
      isActiveAndEnabled: boolean;
      transform: UnityEngine.Transform;
      gameObject: UnityEngine.GameObject;
      tag: string;
      rigidbody: UnityEngine.Component;
      rigidbody2D: UnityEngine.Component;
      camera: UnityEngine.Component;
      light: UnityEngine.Component;
      animation: UnityEngine.Component;
      constantForce: UnityEngine.Component;
      renderer: UnityEngine.Component;
      audio: UnityEngine.Component;
      networkView: UnityEngine.Component;
      collider: UnityEngine.Component;
      collider2D: UnityEngine.Component;
      hingeJoint: UnityEngine.Component;
      particleSystem: UnityEngine.Component;
      name: string;
      hideFlags: UnityEngine.HideFlags;
      Prepare: (() => void);
      Play: (() => void);
      Pause: (() => void);
      Stop: (() => void);
      StepForward: (() => void);
      GetAudioLanguageCode: ((trackIndex: any) => string);
      GetAudioChannelCount: ((trackIndex: any) => any);
      GetAudioSampleRate: ((trackIndex: any) => any);
      EnableAudioTrack: ((trackIndex: any, enabled: boolean) => void);
      IsAudioTrackEnabled: ((trackIndex: any) => boolean);
      GetDirectAudioVolume: ((trackIndex: any) => number);
      SetDirectAudioVolume: ((trackIndex: any, volume: number) => void);
      GetDirectAudioMute: ((trackIndex: any) => boolean);
      SetDirectAudioMute: ((trackIndex: any, mute: boolean) => void);
      GetTargetAudioSource: ((trackIndex: any) => UnityEngine.AudioSource);
      SetTargetAudioSource: ((trackIndex: any, source: UnityEngine.AudioSource) => void);
      GetComponent: ((type: any) => UnityEngine.Component) | ((type: string) => UnityEngine.Component);
      GetComponentInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component) | ((t: any) => UnityEngine.Component);
      GetComponentsInChildren: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponentInParent: ((t: any) => UnityEngine.Component);
      GetComponentsInParent: ((t: any, includeInactive: boolean) => UnityEngine.Component[]) | ((t: any) => UnityEngine.Component[]);
      GetComponents: ((type: any) => UnityEngine.Component[]) | ((type: any, results: any) => void);
      CompareTag: ((tag: string) => boolean);
      SendMessageUpwards: ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      SendMessage: ((methodName: string, value: any) => void) | ((methodName: string) => void) | ((methodName: string, value: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      BroadcastMessage: ((methodName: string, parameter: any, options: UnityEngine.SendMessageOptions) => void) | ((methodName: string, parameter: any) => void) | ((methodName: string) => void) | ((methodName: string, options: UnityEngine.SendMessageOptions) => void);
      GetInstanceID: (() => number);
      GetHashCode: (() => number);
      Equals: ((other: any) => boolean);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface VideoPlayer_EventHandler {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((source: UnityEngine.Video.VideoPlayer) => void);
      BeginInvoke: ((source: UnityEngine.Video.VideoPlayer, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface VideoPlayer_ErrorEventHandler {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((source: UnityEngine.Video.VideoPlayer, message: string) => void);
      BeginInvoke: ((source: UnityEngine.Video.VideoPlayer, message: string, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface VideoPlayer_FrameReadyEventHandler {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((source: UnityEngine.Video.VideoPlayer, frameIdx: any) => void);
      BeginInvoke: ((source: UnityEngine.Video.VideoPlayer, frameIdx: any, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface VideoPlayer_TimeEventHandler {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((source: UnityEngine.Video.VideoPlayer, seconds: number) => void);
      BeginInvoke: ((source: UnityEngine.Video.VideoPlayer, seconds: number, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
  export namespace Windows {
    export interface LicenseInformation {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface CrashReporting {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Crypto {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Directory {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface File {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export namespace Speech {
      export interface PhraseRecognitionSystem {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhraseRecognitionSystem_ErrorDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((errorCode: UnityEngine.Windows.Speech.SpeechError) => void);
        BeginInvoke: ((errorCode: UnityEngine.Windows.Speech.SpeechError, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhraseRecognitionSystem_StatusDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((status: UnityEngine.Windows.Speech.SpeechSystemStatus) => void);
        BeginInvoke: ((status: UnityEngine.Windows.Speech.SpeechSystemStatus, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhraseRecognizer {
        IsRunning: boolean;
        Start: (() => void);
        Stop: (() => void);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhraseRecognizer_PhraseRecognizedDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((args: UnityEngine.Windows.Speech.PhraseRecognizedEventArgs) => void);
        BeginInvoke: ((args: UnityEngine.Windows.Speech.PhraseRecognizedEventArgs, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface DictationRecognizer {
        Status: UnityEngine.Windows.Speech.SpeechSystemStatus;
        AutoSilenceTimeoutSeconds: number;
        InitialSilenceTimeoutSeconds: number;
        Start: (() => void);
        Stop: (() => void);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface DictationRecognizer_DictationHypothesisDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((text: string) => void);
        BeginInvoke: ((text: string, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface DictationRecognizer_DictationResultDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((text: string, confidence: UnityEngine.Windows.Speech.ConfidenceLevel) => void);
        BeginInvoke: ((text: string, confidence: UnityEngine.Windows.Speech.ConfidenceLevel, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface DictationRecognizer_DictationCompletedDelegate {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((cause: UnityEngine.Windows.Speech.DictationCompletionCause) => void);
        BeginInvoke: ((cause: UnityEngine.Windows.Speech.DictationCompletionCause, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface DictationRecognizer_DictationErrorHandler {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((error: string, hresult: number) => void);
        BeginInvoke: ((error: string, hresult: number, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum ConfidenceLevel {
        High = 0,
        Medium = 1,
        Low = 2,
        Rejected = 3,
      }
      export enum SpeechSystemStatus {
        Stopped = 0,
        Running = 1,
        Failed = 2,
      }
      export enum SpeechError {
        NoError = 0,
        TopicLanguageNotSupported = 1,
        GrammarLanguageMismatch = 2,
        GrammarCompilationFailure = 3,
        AudioQualityFailure = 4,
        PauseLimitExceeded = 5,
        TimeoutExceeded = 6,
        NetworkFailure = 7,
        MicrophoneUnavailable = 8,
        UnknownError = 9,
      }
      export enum DictationTopicConstraint {
        WebSearch = 0,
        Form = 1,
        Dictation = 2,
      }
      export enum DictationCompletionCause {
        Complete = 0,
        AudioQualityFailure = 1,
        Canceled = 2,
        TimeoutExceeded = 3,
        PauseLimitExceeded = 4,
        NetworkFailure = 5,
        MicrophoneUnavailable = 6,
        UnknownError = 7,
      }
      export interface SemanticMeaning {
        key: string;
        values: any; // System.String[]
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface PhraseRecognizedEventArgs {
        confidence: UnityEngine.Windows.Speech.ConfidenceLevel;
        semanticMeanings: UnityEngine.Windows.Speech.SemanticMeaning[];
        text: string;
        phraseStartTime: any; // System.DateTime
        phraseDuration: any; // System.TimeSpan
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface KeywordRecognizer {
        Keywords: any; // System.Collections.Generic.IEnumerable`1[System.String]
        IsRunning: boolean;
        Start: (() => void);
        Stop: (() => void);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface GrammarRecognizer {
        GrammarFilePath: string;
        IsRunning: boolean;
        Start: (() => void);
        Stop: (() => void);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
    }
    export namespace WebCam {
      export enum PhotoCaptureFileOutputFormat {
        PNG = 0,
        JPG = 1,
      }
      export interface PhotoCapture {
        StartPhotoModeAsync: ((setupParams: UnityEngine.Windows.WebCam.CameraParameters, onPhotoModeStartedCallback: UnityEngine.Windows.WebCam.PhotoCapture_OnPhotoModeStartedCallback) => void);
        StopPhotoModeAsync: ((onPhotoModeStoppedCallback: UnityEngine.Windows.WebCam.PhotoCapture_OnPhotoModeStoppedCallback) => void);
        TakePhotoAsync: ((filename: string, fileOutputFormat: UnityEngine.Windows.WebCam.PhotoCaptureFileOutputFormat, onCapturedPhotoToDiskCallback: UnityEngine.Windows.WebCam.PhotoCapture_OnCapturedToDiskCallback) => void) | ((onCapturedPhotoToMemoryCallback: UnityEngine.Windows.WebCam.PhotoCapture_OnCapturedToMemoryCallback) => void);
        GetUnsafePointerToVideoDeviceController: (() => any);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum PhotoCapture_CaptureResultType {
        Success = 0,
        UnknownError = 1,
      }
      export interface PhotoCapture_PhotoCaptureResult {
        success: boolean;
        resultType: UnityEngine.Windows.WebCam.PhotoCapture_CaptureResultType;
        hResult: any; // System.Int64
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface PhotoCapture_OnCaptureResourceCreatedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((captureObject: UnityEngine.Windows.WebCam.PhotoCapture) => void);
        BeginInvoke: ((captureObject: UnityEngine.Windows.WebCam.PhotoCapture, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhotoCapture_OnPhotoModeStartedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhotoCapture_OnPhotoModeStoppedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhotoCapture_OnCapturedToDiskCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhotoCapture_OnCapturedToMemoryCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult, photoCaptureFrame: UnityEngine.Windows.WebCam.PhotoCaptureFrame) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.PhotoCapture_PhotoCaptureResult, photoCaptureFrame: UnityEngine.Windows.WebCam.PhotoCaptureFrame, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface PhotoCaptureFrame {
        dataLength: number;
        hasLocationData: boolean;
        pixelFormat: UnityEngine.Windows.WebCam.CapturePixelFormat;
        UploadImageDataToTexture: ((targetTexture: UnityEngine.Texture2D) => void);
        GetUnsafePointerToBuffer: (() => any);
        CopyRawImageDataIntoBuffer: ((byteBuffer: any) => void);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface VideoCapture {
        IsRecording: boolean;
        StartVideoModeAsync: ((setupParams: UnityEngine.Windows.WebCam.CameraParameters, audioState: UnityEngine.Windows.WebCam.VideoCapture_AudioState, onVideoModeStartedCallback: UnityEngine.Windows.WebCam.VideoCapture_OnVideoModeStartedCallback) => void);
        StopVideoModeAsync: ((onVideoModeStoppedCallback: UnityEngine.Windows.WebCam.VideoCapture_OnVideoModeStoppedCallback) => void);
        StartRecordingAsync: ((filename: string, onStartedRecordingVideoCallback: UnityEngine.Windows.WebCam.VideoCapture_OnStartedRecordingVideoCallback) => void);
        StopRecordingAsync: ((onStoppedRecordingVideoCallback: UnityEngine.Windows.WebCam.VideoCapture_OnStoppedRecordingVideoCallback) => void);
        GetUnsafePointerToVideoDeviceController: (() => any);
        Dispose: (() => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum VideoCapture_CaptureResultType {
        Success = 0,
        UnknownError = 1,
      }
      export enum VideoCapture_AudioState {
        MicAudio = 0,
        ApplicationAudio = 1,
        ApplicationAndMicAudio = 2,
        None = 3,
      }
      export interface VideoCapture_VideoCaptureResult {
        success: boolean;
        resultType: UnityEngine.Windows.WebCam.VideoCapture_CaptureResultType;
        hResult: any; // System.Int64
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
      export interface VideoCapture_OnVideoCaptureResourceCreatedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((captureObject: UnityEngine.Windows.WebCam.VideoCapture) => void);
        BeginInvoke: ((captureObject: UnityEngine.Windows.WebCam.VideoCapture, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface VideoCapture_OnVideoModeStartedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface VideoCapture_OnVideoModeStoppedCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface VideoCapture_OnStartedRecordingVideoCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface VideoCapture_OnStoppedRecordingVideoCallback {
        Method: any; // System.Reflection.MethodInfo
        Target: any; // System.Object
        Invoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult) => void);
        BeginInvoke: ((result: UnityEngine.Windows.WebCam.VideoCapture_VideoCaptureResult, callback: any, object: any) => any);
        EndInvoke: ((result: any) => void);
        GetObjectData: ((info: any, context: any) => void);
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetInvocationList: (() => any);
        DynamicInvoke: ((args: any) => any);
        Clone: (() => any);
        GetType: (() => any);
        ToString: (() => string);
      }
      export enum CapturePixelFormat {
        BGRA32 = 0,
        NV12 = 1,
        JPEG = 2,
        PNG = 3,
      }
      export enum WebCamMode {
        None = 0,
        PhotoMode = 1,
        VideoMode = 2,
      }
      export interface WebCam {
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        GetType: (() => any);
        ToString: (() => string);
      }
      export interface CameraParameters {
        hologramOpacity: number;
        frameRate: number;
        cameraResolutionWidth: number;
        cameraResolutionHeight: number;
        pixelFormat: UnityEngine.Windows.WebCam.CapturePixelFormat;
        Equals: ((obj: any) => boolean);
        GetHashCode: (() => number);
        ToString: (() => string);
        GetType: (() => any);
      }
    }
  }
  export namespace WSA {
    export interface AppCallbackItem {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: (() => void);
      BeginInvoke: ((callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface WindowSizeChanged {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((width: number, height: number) => void);
      BeginInvoke: ((width: number, height: number, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum WindowActivationState {
      CodeActivated = 0,
      Deactivated = 1,
      PointerActivated = 2,
    }
    export interface WindowActivated {
      Method: any; // System.Reflection.MethodInfo
      Target: any; // System.Object
      Invoke: ((state: UnityEngine.WSA.WindowActivationState) => void);
      BeginInvoke: ((state: UnityEngine.WSA.WindowActivationState, callback: any, object: any) => any);
      EndInvoke: ((result: any) => void);
      GetObjectData: ((info: any, context: any) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetInvocationList: (() => any);
      DynamicInvoke: ((args: any) => any);
      Clone: (() => any);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Application {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Cursor {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum Folder {
      Installation = 0,
      Temporary = 1,
      Local = 2,
      Roaming = 3,
      CameraRoll = 4,
      DocumentsLibrary = 5,
      HomeGroup = 6,
      MediaServerDevices = 7,
      MusicLibrary = 8,
      PicturesLibrary = 9,
      Playlists = 10,
      RemovableDevices = 11,
      SavedPictures = 12,
      VideosLibrary = 13,
    }
    export interface Launcher {
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export enum TileTemplate {
      TileSquare150x150Image = 0,
      TileSquare150x150Block = 1,
      TileSquare150x150Text01 = 2,
      TileSquare150x150Text02 = 3,
      TileSquare150x150Text03 = 4,
      TileSquare150x150Text04 = 5,
      TileSquare150x150PeekImageAndText01 = 6,
      TileSquare150x150PeekImageAndText02 = 7,
      TileSquare150x150PeekImageAndText03 = 8,
      TileSquare150x150PeekImageAndText04 = 9,
      TileWide310x150Image = 10,
      TileWide310x150ImageCollection = 11,
      TileWide310x150ImageAndText01 = 12,
      TileWide310x150ImageAndText02 = 13,
      TileWide310x150BlockAndText01 = 14,
      TileWide310x150BlockAndText02 = 15,
      TileWide310x150PeekImageCollection01 = 16,
      TileWide310x150PeekImageCollection02 = 17,
      TileWide310x150PeekImageCollection03 = 18,
      TileWide310x150PeekImageCollection04 = 19,
      TileWide310x150PeekImageCollection05 = 20,
      TileWide310x150PeekImageCollection06 = 21,
      TileWide310x150PeekImageAndText01 = 22,
      TileWide310x150PeekImageAndText02 = 23,
      TileWide310x150PeekImage01 = 24,
      TileWide310x150PeekImage02 = 25,
      TileWide310x150PeekImage03 = 26,
      TileWide310x150PeekImage04 = 27,
      TileWide310x150PeekImage05 = 28,
      TileWide310x150PeekImage06 = 29,
      TileWide310x150SmallImageAndText01 = 30,
      TileWide310x150SmallImageAndText02 = 31,
      TileWide310x150SmallImageAndText03 = 32,
      TileWide310x150SmallImageAndText04 = 33,
      TileWide310x150SmallImageAndText05 = 34,
      TileWide310x150Text01 = 35,
      TileWide310x150Text02 = 36,
      TileWide310x150Text03 = 37,
      TileWide310x150Text04 = 38,
      TileWide310x150Text05 = 39,
      TileWide310x150Text06 = 40,
      TileWide310x150Text07 = 41,
      TileWide310x150Text08 = 42,
      TileWide310x150Text09 = 43,
      TileWide310x150Text10 = 44,
      TileWide310x150Text11 = 45,
      TileSquare310x310BlockAndText01 = 46,
      TileSquare310x310BlockAndText02 = 47,
      TileSquare310x310Image = 48,
      TileSquare310x310ImageAndText01 = 49,
      TileSquare310x310ImageAndText02 = 50,
      TileSquare310x310ImageAndTextOverlay01 = 51,
      TileSquare310x310ImageAndTextOverlay02 = 52,
      TileSquare310x310ImageAndTextOverlay03 = 53,
      TileSquare310x310ImageCollectionAndText01 = 54,
      TileSquare310x310ImageCollectionAndText02 = 55,
      TileSquare310x310ImageCollection = 56,
      TileSquare310x310SmallImagesAndTextList01 = 57,
      TileSquare310x310SmallImagesAndTextList02 = 58,
      TileSquare310x310SmallImagesAndTextList03 = 59,
      TileSquare310x310SmallImagesAndTextList04 = 60,
      TileSquare310x310Text01 = 61,
      TileSquare310x310Text02 = 62,
      TileSquare310x310Text03 = 63,
      TileSquare310x310Text04 = 64,
      TileSquare310x310Text05 = 65,
      TileSquare310x310Text06 = 66,
      TileSquare310x310Text07 = 67,
      TileSquare310x310Text08 = 68,
      TileSquare310x310TextList01 = 69,
      TileSquare310x310TextList02 = 70,
      TileSquare310x310TextList03 = 71,
      TileSquare310x310SmallImageAndText01 = 72,
      TileSquare310x310SmallImagesAndTextList05 = 73,
      TileSquare310x310Text09 = 74,
      TileSquare71x71IconWithBadge = 75,
      TileSquare150x150IconWithBadge = 76,
      TileWide310x150IconWithBadgeAndText = 77,
      TileSquare71x71Image = 78,
      TileTall150x310Image = 79,
      TileSquare99x99IconWithBadge = 1000,
      TileSquare210x210IconWithBadge = 1001,
      TileWide432x210IconWithBadgeAndText = 1002,
    }
    export enum ToastTemplate {
      ToastImageAndText01 = 0,
      ToastImageAndText02 = 1,
      ToastImageAndText03 = 2,
      ToastImageAndText04 = 3,
      ToastText01 = 4,
      ToastText02 = 5,
      ToastText03 = 6,
      ToastText04 = 7,
    }
    export enum TileForegroundText {
      Default = -1,
      Dark = 0,
      Light = 1,
    }
    export interface SecondaryTileData {
      backgroundColor: UnityEngine.Color32;
      arguments: string;
      backgroundColorSet: boolean;
      displayName: string;
      foregroundText: UnityEngine.WSA.TileForegroundText;
      lockScreenBadgeLogo: string;
      lockScreenDisplayBadgeAndTileText: boolean;
      phoneticName: string;
      roamingEnabled: boolean;
      showNameOnSquare150x150Logo: boolean;
      showNameOnSquare310x310Logo: boolean;
      showNameOnWide310x150Logo: boolean;
      square150x150Logo: string;
      square30x30Logo: string;
      square310x310Logo: string;
      square70x70Logo: string;
      tileId: string;
      wide310x150Logo: string;
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      ToString: (() => string);
      GetType: (() => any);
    }
    export interface Tile {
      id: string;
      hasUserConsent: boolean;
      exists: boolean;
      Update: ((xml: string) => void) | ((medium: string, wide: string, large: string, text: string) => void);
      PeriodicUpdate: ((uri: string, interval: number) => void);
      StopPeriodicUpdate: (() => void);
      UpdateBadgeImage: ((image: string) => void);
      UpdateBadgeNumber: ((number: number) => void);
      RemoveBadge: (() => void);
      PeriodicBadgeUpdate: ((uri: string, interval: number) => void);
      StopPeriodicBadgeUpdate: (() => void);
      Delete: (() => void) | ((pos: UnityEngine.Vector2) => void) | ((area: UnityEngine.Rect) => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
    export interface Toast {
      arguments: string;
      activated: boolean;
      dismissed: boolean;
      dismissedByUser: boolean;
      Show: (() => void);
      Hide: (() => void);
      Equals: ((obj: any) => boolean);
      GetHashCode: (() => number);
      GetType: (() => any);
      ToString: (() => string);
    }
  }
}
